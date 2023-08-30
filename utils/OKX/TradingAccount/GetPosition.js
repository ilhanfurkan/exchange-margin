const getPositionsRequest = (payload) => {
  return {
    instType: payload.instType,
    instId: payload.instId,
    posId: payload.posId,
  };
};

const getPositionsResponse = (payload) => {
  return {
    adl: payload.adl,
    availPos: payload.availPos,
    avgPx: payload.avgPx,
    cTime: payload.cTime,
    ccy: payload.ccy,
    deltaBS: payload.deltaBS,
    deltaPA: payload.deltaPA,
    gammaBS: payload.gammaBS,
    gammaPA: payload.gammaPA,
    imr: payload.imr,
    instId: payload.instId,
    instType: payload.instType,
    interest: payload.interest,
    idxPx: payload.idxPx,
    usdPx: payload.usdPx,
    last: payload.last,
    lever: payload.lever,
    liab: payload.liab,
    liabCcy: payload.liabCcy,
    liqPx: payload.liqPx,
    markPx: payload.markPx,
    margin: payload.margin,
    mgnMode: payload.mgnMode,
    mgnRatio: payload.mgnRatio,
    mmr: payload.mmr,
    notionalUsd: payload.notionalUsd,
    optVal: payload.optVal,
    pTime: payload.pTime,
    pos: payload.pos,
    baseBorrowed: payload.baseBorrowed,
    baseInterest: payload.baseInterest,
    quoteBorrowed: payload.quoteBorrowed,
    quoteInterest: payload.quoteInterest,
    posCcy: payload.posCcy,
    posId: payload.posId,
    posSide: payload.posSide,
    spotInUseAmt: payload.spotInUseAmt,
    spotInUseCcy: payload.spotInUseCcy,
    bizRefId: payload.bizRefId,
    bizRefType: payload.bizRefType,
    thetaBS: payload.thetaBS,
    thetaPA: payload.thetaPA,
    tradeId: payload.tradeId,
    uTime: payload.uTime,
    upl: payload.upl,
    uplLastPx: payload.uplLastPx,
    uplRatio: payload.uplRatio,
    uplRatioLastPx: payload.uplRatioLastPx,
    vegaBS: payload.vegaBS,
    vegaPA: payload.vegaPA,
    closeOrderAlgo: {
      algoId: payload.algoId,
      slTriggerPx: payload.slTriggerPx,
      slTriggerPxType: payload.slTriggerPxType,
      tpTriggerPx: payload.tpTriggerPx,
      tpTriggerPxType: payload.tpTriggerPxType,
      closeFraction: payload.closeFraction,
    },
  };
};

module.exports = {
  getPositionsRequest,
  getPositionsResponse,
};
