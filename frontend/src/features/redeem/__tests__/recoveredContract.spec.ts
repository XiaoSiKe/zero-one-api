import { describe, expect, it, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { validateRedeemGeneration } from '../generation'
import zhDashboard from '@/i18n/locales/zh/dashboard'
import enDashboard from '@/i18n/locales/en/dashboard'
import zhResources from '@/i18n/locales/zh/admin/resources'
import enResources from '@/i18n/locales/en/admin/resources'

const asset = resolve(dirname(fileURLToPath(import.meta.url)), '../../../../../deploy/zero-one/recovered-frontend/console/assets/zero-one-redeem-contract-20260828.js')
const recovered = await import(/* @vite-ignore */ `data:text/javascript;base64,${Buffer.from(readFileSync(asset, 'utf8')).toString('base64')}`)

describe('recovered Redeem Code contract parity', () => {
  it('uses the same currency and batch rules as maintained source', () => {
    for (const value of [0, 1e-9, 0.001, 0.01, 0.29, 1.001, 2.5, 999_999_999_999.99, 1e12, Infinity, NaN]) {
      for (const count of [0, 1, 1.5, 100, 101]) {
        const request = { count, type: 'benefit' as const, value }
        expect(recovered.validateRedeemGeneration(request)).toBe(validateRedeemGeneration(request))
      }
    }
  })

  it('uses the same localized failure and retry copy as maintained source', () => {
    for (const [locale, dashboard, resources] of [
      ['zh', zhDashboard, zhResources], ['en', enDashboard, enResources],
    ] as const) {
      const t = recovered.redeemTranslations({ locale: { value: locale }, t: (key: string) => key })
      expect(t('redeem.refreshFailed')).toBe(dashboard.redeem.refreshFailed)
      expect(t('redeem.resultUncertain')).toBe(dashboard.redeem.resultUncertain)
      expect(t('redeem.resultUncertainAfterRefresh')).toBe(dashboard.redeem.resultUncertainAfterRefresh)
      expect(t('redeem.resultUncertainRefreshFailed')).toBe(dashboard.redeem.resultUncertainRefreshFailed)
      expect(t('redeem.retryRefresh')).toBe(dashboard.redeem.retryRefresh)
      expect(t('admin.redeem.invalidAmount')).toBe(resources.redeem.invalidAmount)
      expect(t('admin.redeem.invalidCount')).toBe(resources.redeem.invalidCount)
      expect(t('admin.redeem.invalidMysteryBoxRange')).toBe(resources.redeem.invalidMysteryBoxRange)
      expect(t('admin.redeem.deleteUnusedIncomplete', { count: 3 })).toBe(resources.redeem.deleteUnusedIncomplete.replace('{count}', '3'))
    }
  })

  it('stops a stalled recovered cleanup and keeps the actual deletion count', async () => {
    const api = { list: vi.fn().mockResolvedValue({ items: [{ id: 1 }] }), batchDelete: vi.fn().mockResolvedValue({ deleted: 0 }) }
    expect(await recovered.deleteAllUnusedRedeemCodes(api)).toEqual({ deleted: 0, complete: false })
    expect(api.list).toHaveBeenCalledOnce()
  })
})
