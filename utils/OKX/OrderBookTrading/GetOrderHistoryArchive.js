const getOrderHistoryArchiveRequest = (payload) => {
  return {
    instType: payload.instType,
    uly: payload.uly,
    instFamily: payload.instFamily,
    instId: payload.instId,
    ordType: payload.ordType,
    state: payload.state,
    after: payload.after,
    before: payload.after,
    limit: payload.limit,
  };
};

const getOrderHistoryArchiveResponse = (payload) => {
  return {
    instType: payload.instType,
    instId: payload.instId,
    ccy: payload.ccy,
    ordId: payload.ordId,
    clOrdId: payload.clOrdId,
    tag: payload.tag,
    px: payload.px,
    sz: payload.sz,
    ordType: payload.ordType,
    side: payload.side,
    posSide: payload.posSide,
    tdMode: payload.tdMode,
    accFillSz: payload.accFillSz,
    fillPx: payload.fillPx,
    tradeId: payload.tradeId,
    fillSz: payload.fillSz,
    fillTime: payload.fillTime,
    state: payload.state,
    avgPx: payload.avgPx,
    lever: payload.lever,
    attachAlgoClOrdId: payload.attachAlgoClOrdId,
    tpTriggerPx: payload.tpTriggerPx,
    tpTriggerPxType: payload.tpTriggerPxType,
    tpOrdPx: payload.tpOrdPx,
    slTriggerPx: payload.slTriggerPx,
    slTriggerPxType: payload.slTriggerPxType,
    slOrdPx: payload.slOrdPx,
    stpId: payload.stpId,
    stpMode: payload.stpMode,
    feeCcy: payload.feeCcy,
    fee: payload.fee,
    rebateCcy: payload.rebateCcy,
    source: payload.source,
    rebate: payload.rebate,
    tgtCcy: payload.tgtCcy,
    pnl: payload.pnl,
    category: payload.category,
    reduceOnly: payload.reduceOnly,
    cancelSource: payload.cancelSource,
    cancelSourceReason: payload.cancelSourceReason,
    algoClOrdId: payload.algoClOrdId,
    algoId: payload.algoId,
    uTime: payload.uTime,
    cTime: payload.cTime,
  };
};

module.exports = {
  getOrderHistoryArchiveRequest,
  getOrderHistoryArchiveResponse,
};
