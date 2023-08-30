const getInstrumentsRequest = (payload) => {
  return {
    instType: payload.instType,
    uly: payload.uly,
    instFamily: payload.instFamily,
    instId: payload.instId,
  };
};

const getInstrumentsResponse = (payload) => {
  return {
    instType: payload.instType,
    instId: payload.instId,
    uly: payload.uly,
    instFamily: payload.instFamily,
    category: payload.category,
    baseCcy: payload.baseCcy,
    quoteCcy: payload.quoteCcy,
    settleCcy: payload.settleCcy,
    ctVal: payload.ctVal,
    ctMult: payload.ctMult,
    ctValCcy: payload.ctValCcy,
    optType: payload.optType,
    stk: payload.stk,
    listTime: payload.listTime,
    expTime: payload.expTime,
    lever: payload.lever,
    tickSz: payload.tickSz,
    lotSz: payload.lotSz,
    minSz: payload.minSz,
    ctType: payload.ctType,
    alias: payload.alias,
    state: payload.state,
    maxLmtSz: payload.maxLmtSz,
    maxMktSz: payload.maxMktSz,
    maxTwapSz: payload.maxTwapSz,
    maxIcebergSz: payload.maxIcebergSz,
    maxTriggerSz: payload.maxTriggerSz,
    maxStopSz: payload.maxStopSz,
  };
};

module.exports = {
  getInstrumentsRequest,
  getInstrumentsResponse,
};
