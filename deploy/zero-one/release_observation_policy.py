"""Pure policy for comparing post-release internal-error taxonomy with its baseline."""


def classify_internal_taxonomy(baseline_rows, current_rows, elapsed_seconds):
    baseline = {row["signature"]: row["count"] for row in baseline_rows}
    novel = []
    bursts = []
    elapsed_hours = max(elapsed_seconds / 3600, 1 / 60)
    for row in current_rows:
        signature = row["signature"]
        count = row["count"]
        if signature not in baseline:
            novel.append(row)
            continue
        baseline_hourly = baseline[signature] / (7 * 24)
        current_hourly = count / elapsed_hours
        if count >= 5 and current_hourly > max(10, baseline_hourly * 6):
            bursts.append({**row, "baseline_7d_count": baseline[signature]})
    return {"novel": novel, "bursts": bursts}
