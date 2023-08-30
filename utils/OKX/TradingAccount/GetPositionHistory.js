const getPositionHistoryRequest = (payload) => {
  return {
    instType: payload.instType,
    instId: payload.instId,
    mgnMode: payload.mgnMode,
    type: payload.type,
    posId: payload.posId,
    after: payload.after,
    before: payload.before,
    limit: payload.limit,
  };
};

const getPositionHistoryResponse = (payload) => {
  return {
    instType: payload.instType,
    instId: payload.instId,
    mgnMode: payload.mgnMode,
    type: payload.type,
    cTime: payload.cTime,
    uTime: payload.uTime,
    openAvgPx: payload.openAvgPx,
    closeAvgPx: payload.closeAvgPx,
    posId: payload.posId,
    openMaxPos: payload.openMaxPos,
    closeTotalPos: payload.closeTotalPos,
    pnl: payload.pnl,
    pnlRatio: payload.pnlRatio,
    lever: payload.lever,
    direction: payload.direction,
    triggerPx: payload.triggerPx,
    uly: payload.uly,
    ccy: payload.ccy,
  };
};

module.exports = {
  getPositionHistoryRequest,
  getPositionHistoryResponse,
};
