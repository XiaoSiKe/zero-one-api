import { describe, expect, it } from 'vitest'
import * as XLSX from 'xlsx'

describe('Usage export SheetJS contract', () => {
  it('creates a valid XLSX archive with the production export API', () => {
    const worksheet = XLSX.utils.aoa_to_sheet([
      ['时间', '用户', '模型', '费用'],
      ['2026-08-25T12:00:00+08:00', 'user@01yapi.test', 'gpt-5', '0.125000'],
    ])
    XLSX.utils.sheet_add_aoa(worksheet, [['2026-08-25T12:01:00+08:00', 'user@01yapi.test', 'claude-sonnet-4-6', '0.250000']], { origin: -1 })
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Usage')

    const bytes = new Uint8Array(XLSX.write(workbook, { bookType: 'xlsx', type: 'array' }))

    expect(bytes.byteLength).toBeGreaterThan(100)
    expect(Array.from(bytes.slice(0, 2))).toEqual([0x50, 0x4b])
  })
})
