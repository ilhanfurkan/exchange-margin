const postSimulatedMarginRequest = (payload) => {
  return {
    instType: payload.instType,
    inclRealPos: payload.inclRealPos,
    spotOffsetType: payload.spotOffsetType,
    simPos: [{
      instId:payload.simPos.instId,
      pos:payload.simPos.pos,
    }],
  };
};
const postSimulatedMarginResponse = (payload) => {
  return {
    riskUnit: payload.riskUnit,
    ts: payload.ts,
    mmr: payload.mmr,
    imr: payload.imr,
    acctImr: payload.acctImr,
    acctMmr: payload.acctMmr,
    mr1: payload.mr1,
    mr2: payload.mr2,
    mr3: payload.mr3,
    mr4: payload.mr4,
    mr5: payload.mr5,
    mr6: payload.mr6,
    mr7: payload.mr7,
    posData: [{
      instId: position.posData.instId,
      instType: position.posData.instType,
      pos: position.posData.pos,
      notionalUsd: position.posData.notionalUsd,
      delta: position.posData.delta,
      gamma: position.posData.gamma,
      vega: position.posData.vega,
      theta: position.posData.theta,
    }],
  };
};

module.exports = {
  postSimulatedMarginRequest,
  postSimulatedMarginResponse,
};