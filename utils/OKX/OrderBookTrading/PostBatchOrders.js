const postBatchOrdersRequest = (payload) => {
  return {
    instId: payload.instId,
    tdMode: payload.tdMode,
    ccy: payload.ccy,
    clOrdId: payload.clOrdId,
    tag: payload.tag,
    side: payload.side,
    posSide: payload.posSide,
    ordType: payload.ordType,
    sz: payload.sz,
    px: payload.px,
    reduceOnly: payload.reduceOnly,
    tgtCcy: payload.tgtCcy,
    banAmend: payload.banAmend,
    attachAlgoClOrdId: payload.attachAlgoClOrdId,
    tpTriggerPx: payload.tpTriggerPx,
    tpOrdPx: payload.tpOrdPx,
    slTriggerPx: payload.slTriggerPx,
    slOrdPx: payload.slOrdPx,
    tpTriggerPxType: payload.tpTriggerPxType,
    slTriggerPxType: payload.slTriggerPxType,
    quickMgnType: payload.quickMgnType,
    stpId: payload.stpId,
    stpMode: payload.stpMode,
  };
};
const postBatchOrdersResponse = (payload) => {
  return {
    ordId: payload.ordId,
    clOrdId: payload.clOrdId,
    tag: payload.tag,
    sCode: payload.sCode,
    sMsg: payload.sMsg,
  };
};

module.exports = {
  postBatchOrdersRequest,
  postBatchOrdersResponse,
};