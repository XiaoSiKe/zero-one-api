import type { GenerateRedeemCodesRequest } from '@/types'

// Largest whole-cent value that fits the backend's DECIMAL(20,8) storage.
export const MAX_REDEEM_AMOUNT = 999_999_999_999.99

function isWholeCentAmount(value: number | undefined): boolean {
  return typeof value === 'number' && Number.isFinite(value) &&
    value >= 0.01 && value <= MAX_REDEEM_AMOUNT && /^\d+(?:\.\d{1,2})?$/.test(String(value))
}

export function validateRedeemGeneration(request: GenerateRedeemCodesRequest) {
  if (!Number.isInteger(request.count) || request.count < 1 || request.count > 100) {
    return 'invalidCount'
  }
  if (request.type === 'benefit' && !isWholeCentAmount(request.value)) {
    return 'invalidAmount'
  }
  if (request.type === 'mystery_box' && (
    !isWholeCentAmount(request.min_value) || !isWholeCentAmount(request.max_value) ||
    request.min_value! > request.max_value!
  )) {
    return 'invalidMysteryBoxRange'
  }
  return null
}
