import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const repositoryRoot = new URL('../../', import.meta.url)
const read = (path) => readFileSync(new URL(path, repositoryRoot), 'utf8')
const sha256 = (content) => createHash('sha256').update(content).digest('hex')

test('LGPL distributions include the complete GPL companion without relicensing the project', () => {
  // The unchanged upstream LGPLv3 and GNU's verbatim gpl-3.0.txt, respectively.
  assert.equal(sha256(read('LICENSE')), 'a5681bf9b05db14d86776930017c647ad9e6e56ff6bbcfdf21e5848288dfaf1b')
  assert.equal(sha256(read('COPYING.GPLv3')), '3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986')
})

test('source and recovered Public Site notices preserve all identified runtime license texts', () => {
  const paths = [
    ['THIRD_PARTY_NOTICES.md', '621cdeda62bc80df8e88aadd8595aa686f2ec295822bb273b0e9a7b53955c812'],
    ['landing/public/THIRD_PARTY_NOTICES.txt', 'cc8700a299cef711598e0132893bc55e8d99bb4fb3419da1d99a924f2c5332e3'],
    ['deploy/zero-one/recovered-frontend/landing/THIRD_PARTY_NOTICES.txt', 'cc8700a299cef711598e0132893bc55e8d99bb4fb3419da1d99a924f2c5332e3'],
  ]
  for (const [path, reactBitsNoticeHash] of paths) {
    const notice = read(path)
    const companionStart = notice.indexOf('\n## Project license materials\n')
    assert.ok(companionStart >= 0, `${path} must explain the LGPL companion`)
    assert.equal(sha256(notice.slice(0, companionStart)), reactBitsNoticeHash, `${path} must retain React Bits verbatim`)
    assert.ok(notice.includes('not a relicensing of Sub2API or the third-party components'))
    assert.deepEqual(
      [...notice.matchAll(/```text\n([\s\S]*?)```/g)].map(([, text]) => sha256(text)),
      [
        // Published React/ReactDOM/Scheduler LICENSE (identical), Lucide LICENSE
        // including Feather, and OGL README's full Unlicense section.
        'da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93',
        'b495047bd93a9b06913511076f504daba17d5bbeb3e0650f3bb53a4220329c57',
        '6b0382b16279f26ff69014300541967a356a666eb0b91b422f6862f6b7dad17e',
      ],
      `${path} must include complete upstream notices, not just license names`,
    )
    const packages = JSON.parse(read('landing/package-lock.json')).packages
    const runtimePackages = Object.entries(packages)
      .filter(([name, entry]) => name && !entry.dev)
      .map(([name, entry]) => `${name.slice('node_modules/'.length)}@${entry.version}`)
      .sort()
    assert.deepEqual(runtimePackages, ['lucide-react@1.31.0', 'ogl@1.0.11', 'react-dom@19.2.8', 'react@19.2.8', 'scheduler@0.27.0'])
    for (const dependency of runtimePackages) assert.ok(notice.includes(dependency), `${path} must identify ${dependency}`)
  }
  assert.equal(read(paths[1][0]), read(paths[2][0]), 'source and recovered Public Site notices must stay in sync')
})

test('supported runtime images carry the project license and notices in their final stage', () => {
  for (const path of ['Dockerfile', 'Dockerfile.goreleaser', 'deploy/Dockerfile', 'deploy/zero-one/Dockerfile.edge']) {
    const dockerfile = read(path)
    const runtimeStage = dockerfile.slice(dockerfile.lastIndexOf('\nFROM ') + 1)
    assert.match(
      runtimeStage,
      /^COPY LICENSE COPYING\.GPLv3 THIRD_PARTY_NOTICES\.md \/usr\/share\/licenses\/zero-one-api\/$/m,
      `${path} must ship license materials with the runnable artifact, not just the builder`,
    )
  }
  const exclusions = read('.dockerignore').split('\n')
  assert.ok(exclusions.includes('*.md'), 'unrelated documentation must remain outside the build context')
  assert.ok(exclusions.indexOf('!THIRD_PARTY_NOTICES.md') > exclusions.indexOf('*.md'), 'the exact notice file must survive the markdown exclusion')
})

test('release archives and every GoReleaser image context include the license materials', () => {
  const release = read('.goreleaser.yaml')
  // Like the CI policy tests, read the repository's indented mapping blocks
  // without adding a YAML dependency to the offline protection checks.
  const archives = release.match(/^archives:\n((?: +.*\n|\n)*)/m)?.[1]
  assert.ok(archives, 'release archives must be configured')
  for (const file of ['LICENSE*', 'COPYING.GPLv3', 'THIRD_PARTY_NOTICES.md']) {
    assert.ok(archives.split('\n').includes(`      - ${file}`), `release archives must carry ${file}`)
  }
  for (const path of ['.goreleaser.yaml', '.goreleaser.simple.yaml']) {
    const dockers = read(path).match(/^dockers:\n((?: +.*\n|\n)*)/m)?.[1]
    assert.ok(dockers, `${path} must configure GoReleaser images`)
    const images = [...dockers.matchAll(/^  - id: ([\w-]+)\n((?: {4}.*(?:\n|$)|\n)*)/gm)]
    assert.ok(images.length > 0, 'check every configured GoReleaser image')
    for (const [, id, image] of images) {
      const files = image.match(/^    extra_files:\n((?: {6}.*(?:\n|$)|\n)*)/m)?.[1]
      assert.ok(files, `${path}: ${id} must declare its Docker build context`)
      for (const file of ['LICENSE', 'COPYING.GPLv3', 'THIRD_PARTY_NOTICES.md']) {
        assert.ok(files.split('\n').includes(`      - ${file}`), `${path}: ${id} must make ${file} available to Docker COPY`)
      }
    }
  }
})
