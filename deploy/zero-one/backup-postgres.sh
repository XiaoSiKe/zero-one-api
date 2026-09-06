#!/bin/sh
set -eu

# Run this from a host scheduler after setting BACKUP_DIR and
# BACKUP_AGE_RECIPIENT. The database itself remains private to Docker.
script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
env_file=${1:-"$script_dir/.env"}
backup_root=${BACKUP_DIR:?BACKUP_DIR is required}
age_recipient=${BACKUP_AGE_RECIPIENT:?BACKUP_AGE_RECIPIENT is required}
sentinel_name=${BACKUP_SENTINEL_FILE:-.offsite-mounted}

if [ ! -f "$env_file" ]; then
  echo "deployment environment file does not exist: $env_file" >&2
  exit 1
fi

for command in docker age flock mountpoint sha256sum tar; do
  if ! command -v "$command" >/dev/null 2>&1; then
    echo "required command is unavailable: $command" >&2
    exit 1
  fi
done

umask 077
daily_dir="$backup_root/daily"
weekly_dir="$backup_root/weekly"
lock_file="$backup_root/.postgres-backup.lock"

case "$sentinel_name" in
  ""|.|..|*/*)
    echo "BACKUP_SENTINEL_FILE must be a single file name inside BACKUP_DIR" >&2
    exit 1
    ;;
esac

if [ ! -d "$backup_root" ]; then
  echo "backup destination does not exist; mount the off-host filesystem first: $backup_root" >&2
  exit 1
fi
if ! mountpoint -q "$backup_root"; then
  echo "backup destination is not a mounted filesystem: $backup_root" >&2
  exit 1
fi
sentinel_path="$backup_root/$sentinel_name"
if [ ! -f "$sentinel_path" ] || [ -L "$sentinel_path" ]; then
  echo "backup mount sentinel is missing or unsafe: $sentinel_path" >&2
  exit 1
fi

mkdir -p "$daily_dir" "$weekly_dir"

exec 9>"$lock_file"
if ! flock -n 9; then
  echo "another PostgreSQL backup is already running" >&2
  exit 1
fi

# Plaintext staging stays on the source host. Only age ciphertext crosses the
# off-host filesystem boundary.
tmp_dir=$(mktemp -d "${TMPDIR:-/tmp}/zero-one-postgres-backup.XXXXXX")
tmp_dump="$tmp_dir/postgres.dump"
tmp_encrypted="$tmp_dir/postgres.dump.age"
state_source="$script_dir/state/sub2api"
state_stage="$tmp_dir/deployment-state"
tmp_state_archive="$tmp_dir/zero-one-state.tar.gz"
tmp_state_encrypted="$tmp_dir/zero-one-state.tar.gz.age"
cleanup() {
  rm -rf -- "$tmp_dir"
}
trap cleanup EXIT HUP INT TERM

write_checksum() (
  backup_path=$1
  backup_dir=$(dirname -- "$backup_path")
  backup_name=$(basename -- "$backup_path")
  cd "$backup_dir"
  sha256sum "$backup_name" > "$backup_name.sha256.tmp"
  mv -f -- "$backup_name.sha256.tmp" "$backup_name.sha256"
)

backup_day=$(date -u +%F)
daily_backup="$daily_dir/postgres-$backup_day.dump.age"
daily_state_backup="$daily_dir/zero-one-state-$backup_day.tar.gz.age"

if [ ! -d "$state_source" ]; then
  echo "Sub2API data directory does not exist: $state_source" >&2
  exit 1
fi

docker compose --env-file "$env_file" -f "$script_dir/compose.yml" exec -T postgres \
  sh -c 'export PGPASSWORD="$POSTGRES_PASSWORD"; exec pg_dump -h 127.0.0.1 -U "$POSTGRES_USER" -d "$POSTGRES_DB" --format=custom' \
  > "$tmp_dump"

age -r "$age_recipient" -o "$tmp_encrypted" "$tmp_dump"
mkdir -p "$state_stage/config" "$state_stage/state"
cp "$env_file" "$state_stage/config/runtime.env"
for config_file in Caddyfile Caddyfile.shared Dockerfile.edge compose.bootstrap.yml compose.yml; do
  cp "$script_dir/$config_file" "$state_stage/config/$config_file"
done
cp -R "$state_source" "$state_stage/state/sub2api"
# Include certificate state and a real Redis snapshot, not a live AOF copy.
for state_name in caddy-data caddy-config; do
  cp -R "$script_dir/state/$state_name" "$state_stage/state/$state_name"
done
mkdir -p "$state_stage/state/redis"
docker compose --env-file "$env_file" -f "$script_dir/compose.yml" exec -T redis \
  sh -ec 'export REDISCLI_AUTH="${REDIS_PASSWORD:-}"; exec redis-cli --rdb -' \
  > "$state_stage/state/redis/dump.rdb"
test -s "$state_stage/state/redis/dump.rdb"
tar -C "$state_stage" -czf "$tmp_state_archive" .
age -r "$age_recipient" -o "$tmp_state_encrypted" "$tmp_state_archive"

cp "$tmp_encrypted" "$daily_backup.tmp"
cp "$tmp_state_encrypted" "$daily_state_backup.tmp"
mv -f -- "$daily_backup.tmp" "$daily_backup"
mv -f -- "$daily_state_backup.tmp" "$daily_state_backup"
write_checksum "$daily_backup"
write_checksum "$daily_state_backup"

# Keep seven daily backups. A Sunday snapshot also becomes one of four weekly
# recovery points, independent from daily rotation.
find "$daily_dir" -type f -name 'postgres-*.dump.age' -mtime +6 -delete
find "$daily_dir" -type f -name 'postgres-*.dump.age.sha256' -mtime +6 -delete
find "$daily_dir" -type f -name 'zero-one-state-*.tar.gz.age' -mtime +6 -delete
find "$daily_dir" -type f -name 'zero-one-state-*.tar.gz.age.sha256' -mtime +6 -delete

if [ "$(date -u +%u)" = "7" ]; then
  weekly_backup="$weekly_dir/postgres-weekly-$(date -u +%G-W%V).dump.age"
  weekly_state_backup="$weekly_dir/zero-one-state-weekly-$(date -u +%G-W%V).tar.gz.age"
  cp "$daily_backup" "$weekly_backup"
  cp "$daily_state_backup" "$weekly_state_backup"
  write_checksum "$weekly_backup"
  write_checksum "$weekly_state_backup"

  for weekly_pattern in 'postgres-weekly-*.dump.age' 'zero-one-state-weekly-*.tar.gz.age'; do
    find "$weekly_dir" -type f -name "$weekly_pattern" -print |
      sort -r |
      sed -n '5,$p' |
      while IFS= read -r expired_backup; do
        rm -f -- "$expired_backup" "$expired_backup.sha256"
      done
  done
fi

printf '{"completed_at_epoch":%s,"postgres":"%s","state":"%s"}\n' \
  "$(date -u +%s)" "$(basename -- "$daily_backup")" "$(basename -- "$daily_state_backup")" \
  > "$backup_root/.last-success.json.tmp"
mv -f -- "$backup_root/.last-success.json.tmp" "$backup_root/.last-success.json"
echo "encrypted PostgreSQL backup created: $daily_backup"
echo "encrypted deployment state backup created: $daily_state_backup"
