const getAccountPositionRiskRequest = (payload) => {
  return {
    instType: payload.instType,
  };
};

const getAccountPositionRiskResponse = (payload) => {
  return {
    ts: payload.ts,
    adjEq: payload.adjEq,
    balData: [
      {
        ccy: payload.balData.ccy,
        eq: payload.balData.eq,
        disEq: payload.balData.disEq,
      },
    ],
    posData: [
      {
        instType: payload.posData.instType,
        mgnMode: payload.posData.mgnMode,
        posId: payload.posData.posId,
        instId: payload.posData.instId,
        pos: payload.posData.pos,
        baseBal: payload.posData.baseBal,
        quoteBal: payload.posData.quoteBal,
        posSide: payload.posData.posSide,
        posCcy: payload.posData.posCcy,
        ccy: payload.posData.ccy,
        notionalCcy: payload.posData.notionalCcy,
        notionalUsd: payload.posData.notionalUsd,
      },
    ],
  };
};

module.exports = {
  getAccountPositionRiskRequest,
  getAccountPositionRiskResponse,
};
