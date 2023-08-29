const getTradeFeeRequest = (payload) => {
  return {
    instType: payload.instType,
    instId: payload.instId,
    uly: payload.uly,
    posId: payload.posId,
  };
};

const getTradeFeeResponse = (payload) => {
  return {
    level: payload.level,
    taker: payload.taker,
    maker: payload.maker,
    takerU: payload.takerU,
    makerU: payload.makerU,
    delivery: payload.delivery,
    exercise: payload.exercise,
    instType: payload.instType,
    takerUSDC: payload.takerUSDC,
    makerUSDC: payload.makerUSDC,
    ts: payload.ts,
    category: payload.category,
  };
};

module.exports = {
  getTradeFeeRequest,
  getTradeFeeResponse,
};
