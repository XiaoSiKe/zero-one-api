// Generated from the maintained Redeem Code contracts; preserves the recovered UI runtime.
// Largest whole-cent value that fits the backend's DECIMAL(20,8) storage.
export const MAX_REDEEM_AMOUNT = 999_999_999_999.99;
function isWholeCentAmount(value) {
    return typeof value === 'number' && Number.isFinite(value) &&
        value >= 0.01 && value <= MAX_REDEEM_AMOUNT && /^\d+(?:\.\d{1,2})?$/.test(String(value));
}
export function validateRedeemGeneration(request) {
    if (!Number.isInteger(request.count) || request.count < 1 || request.count > 100) {
        return 'invalidCount';
    }
    if (request.type === 'benefit' && !isWholeCentAmount(request.value)) {
        return 'invalidAmount';
    }
    if (request.type === 'mystery_box' && (!isWholeCentAmount(request.min_value) || !isWholeCentAmount(request.max_value) ||
        request.min_value > request.max_value)) {
        return 'invalidMysteryBoxRange';
    }
    return null;
}

export async function deleteAllUnusedRedeemCodes(api) {
    let deleted = 0;
    const attempted = new Set();
    try {
        for (;;) {
            // Deletions shift later rows forward; always read the first remaining page.
            const page = await api.list(1, 1000, { status: 'unused' });
            const ids = page.items.map((code) => code.id);
            if (ids.length === 0)
                return { deleted, complete: true };
            if (ids.some((id) => attempted.has(id)))
                return { deleted, complete: false };
            const result = await api.batchDelete(ids);
            if (!Number.isInteger(result.deleted) || result.deleted < 0 || result.deleted > ids.length) {
                return { deleted, complete: false };
            }
            deleted += result.deleted;
            if (result.deleted === 0)
                return { deleted, complete: false };
            ids.forEach((id) => attempted.add(id));
        }
    }
    catch (error) {
        return { deleted, complete: false, error };
    }
}

const messages = {
  "zh": {
    "redeem.refreshFailed": "兑换已成功，余额或兑换记录暂未刷新。请刷新状态，不要重复兑换。",
    "redeem.retryRefresh": "刷新状态",
    "admin.redeem.invalidAmount": "福利额度须为 0.01 至 999999999999.99 的金额，最多两位小数。",
    "admin.redeem.invalidCount": "生成数量须为 1 至 100 的整数。",
    "admin.redeem.invalidMysteryBoxRange": "盲盒额度须为 0.01 至 999999999999.99 的金额，最多两位小数，且最高额度不得小于最低额度。",
    "admin.redeem.deleteUnusedIncomplete": "已删除 {count} 个未使用兑换码，其余清理未完成。请刷新列表后重试。",
    "redeem.resultUncertain": "兑换结果待确认，请先刷新余额和兑换记录核对，请勿重复提交。",
    "redeem.resultUncertainAfterRefresh": "余额和兑换记录已刷新，请核对是否存在本次兑换记录；兑换结果仍待确认，请勿重复提交。",
    "redeem.resultUncertainRefreshFailed": "兑换结果仍待确认，余额或兑换记录暂未刷新。请稍后刷新核对，请勿重复提交。"
  },
  "en": {
    "redeem.refreshFailed": "Redemption succeeded, but balance or history could not be refreshed. Refresh the status instead of redeeming again.",
    "redeem.retryRefresh": "Refresh status",
    "admin.redeem.invalidAmount": "Benefit amounts must be between 0.01 and 999999999999.99 with at most two decimals.",
    "admin.redeem.invalidCount": "The number of codes must be an integer from 1 to 100.",
    "admin.redeem.invalidMysteryBoxRange": "Amounts must be between 0.01 and 999999999999.99 with at most two decimals, and the maximum must not be below the minimum.",
    "admin.redeem.deleteUnusedIncomplete": "Deleted {count} unused codes, but cleanup is incomplete. Refresh the list before retrying.",
    "redeem.resultUncertain": "The redemption result is unconfirmed. Refresh your balance and redemption history to check before submitting again.",
    "redeem.resultUncertainAfterRefresh": "Balance and history have been refreshed. Check for this redemption in your history; its result is still unconfirmed. Do not submit again.",
    "redeem.resultUncertainRefreshFailed": "The redemption result is still unconfirmed, and balance or history could not be refreshed. Try refreshing later before submitting again."
  }
}
export function redeemTranslations(composer) {
  return (key, params) => {
    const message = messages[composer.locale.value.startsWith("zh") ? "zh" : "en"][key]
    return typeof message === "string" ? message.replace(/\{(\w+)\}/g, (_, name) => String(params?.[name] ?? ("{" + name + "}"))) : composer.t(key, params)
  }
}
