const getFillsHistoryRequest = (payload) => {
  return {
    instType: payload.instType,
    uly: payload.uly,
    instFamily: payload.instFamily,
    instId: payload.instId,
    ordId: payload.ordId,
    after: payload.after,
    before: payload.before,
    begin: payload.begin,
    end: payload.end,
    limit: payload.limit,
  };
};
const getFillsHistoryResponse = (payload) => {
  return {
    instType: payload.instType,
    instId: payload.instId,
    tradeId: payload.tradeId,
    ordId: payload.ordId,
    clOrdId: payload.clOrdId,
    billId: payload.billId,
    tag: payload.tag,
    fillPx: payload.fillPx,
    fillSz: payload.fillSz,
    fillIdxPx: payload.fillIdxPx,
    fillPnl: payload.fillPnl,
    side: payload.side,
    posSide: payload.posSide,
    execType: payload.execType,
    feeCcy: payload.feeCcy,
    fee: payload.fee,
    ts: payload.ts,
    fillTime: payload.fillTime,
  };
};

module.exports = {
  getFillsHistoryRequest,
  getFillsHistoryResponse,
};
