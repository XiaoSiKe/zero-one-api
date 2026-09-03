import { extractApiErrorMessage } from './apiError'

export function passwordRecoveryErrorMessage(
  error: unknown,
  t: (key: string) => string,
  fallback: string
): string {
  return extractApiErrorMessage(error, t(fallback), {
    PASSWORD_RESET_DISABLED: t('auth.passwordResetDisabled'),
    INVALID_RESET_TOKEN: t('auth.invalidOrExpiredToken')
  })
}
