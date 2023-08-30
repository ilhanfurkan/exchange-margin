const getMaxSizeRequest = (payload) => {
  return {
    instId: payload.instId,
    tdMode: payload.tdMode,
    ccy: payload.ccy,
    px: payload.px,
    leverage: payload.leverage,
    unStopOffset: payload.unStopOffset,
  };
};

const getMaxSizeResponse = (payload) => {
  return {
    instId: payload.instId,
    ccy: payload.ccy,
    maxBuy: payload.maxBuy,
    maxSell: payload.maxSell,
  };
};

module.exports = {
  getMaxSizeRequest,
  getMaxSizeResponse,
};
