import { createRequire } from 'node:module'
import { describe, expect, it } from 'vitest'

// Resolve the package used by the actual Tailwind/fast-glob build toolchain.
const require = createRequire(import.meta.url)
const toolchainRequire = createRequire(require.resolve('tailwindcss/package.json'))
const braces = toolchainRequire('braces')
const micromatch = toolchainRequire('micromatch')

describe('patched build-tool brace nesting', () => {
  it.each(['compile', 'expand', 'stringify'])('rejects deeply nested strings in %s', (method) => {
    const pattern = '{'.repeat(3_000) + 'a,b' + '}'.repeat(3_000)
    expect(() => braces[method](pattern)).toThrow(SyntaxError)
    expect(() => braces[method](pattern)).toThrow('maximum depth (128)')
  })

  it.each(['compile', 'expand', 'stringify'])('rejects caller-provided deep ASTs in %s', (method) => {
    let ast: { nodes?: unknown[]; value?: string } = { value: 'a' }
    for (let depth = 0; depth < 10_000; depth++) ast = { nodes: [ast] }
    expect(() => braces[method](ast)).toThrow('maximum depth (128)')
  })

  it('bounds nested parentheses and malformed braces before parser cleanup', () => {
    expect(() => braces.parse('('.repeat(3_000) + 'a')).toThrow('maximum depth (128)')
    expect(() => braces.parse('{'.repeat(3_000) + 'a')).toThrow('maximum depth (128)')
  })

  it('preserves normal compile, expansion, escaped literals and real glob callers', () => {
    expect(braces.compile('src/{components,views}/**/*.{vue,ts}'))
      .toBe('src/(components|views)/**/*.(vue|ts)')
    expect(braces.expand('file-{1..3}.{ts,vue}'))
      .toEqual(['file-1.ts', 'file-1.vue', 'file-2.ts', 'file-2.vue', 'file-3.ts', 'file-3.vue'])
    expect(braces.stringify(braces.parse('literal\\{a,b\\}'))).toBe('literal{a,b}')
    expect(micromatch(['src/a.vue', 'src/b.ts', 'src/c.css'], 'src/*.{vue,ts}'))
      .toEqual(['src/a.vue', 'src/b.ts'])
    expect(() => micromatch.braces('{'.repeat(3_000) + 'a,b' + '}'.repeat(3_000)))
      .toThrow('maximum depth (128)')
  })
})
