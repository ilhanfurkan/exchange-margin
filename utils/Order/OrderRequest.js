exports.OrderRequest = (req,res) => {
  return {
    instId: req.instId,
    tdMode: req.tdMode,
    ccy: req.ccy,
    clOrdIdReq: req.clOrdId,
    tagReq: req.tag,
    side: req.side,
    posSide: req.posSide,
    ordType: req.ordType,
    sz: req.sz,
    px: req.px,
    reduceOnly: req.reduceOnly,
    tgtCcy: req.tgtCcy,
    banAmend: req.banAmend,
    attachAlgoClOrdId: req.attachAlgoClOrdId,
    tpTriggerPx: req.tpTriggerPx,
    tpOrdPx: req.tpOrdPx,
    slTriggerPx: req.slTriggerPx,
    slOrdOx: req.slOrdOx,
    tpTriggerPxType: req.tpTriggerPxType,
    slTriggerPxType: req.slTriggerPxType,
    quickMgnType: req.quickMgnType,
    stpId: req.stpId,
    stpMode: req.stpMode,
    ordId: res[0].ordId
  };
};
