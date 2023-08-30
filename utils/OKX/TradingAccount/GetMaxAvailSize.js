const getMaxAvailSizeRequest = (payload) => {
  return {
    instId: payload.instId,
    ccy: payload.ccy,
    tdMode: payload.tdMode,
    reduceOnly: payload.reduceOnly,
    px: payload.px,
    unSpotOffset: payload.unSpotOffset,
    quickMgnType:   payload.quickMgnType,
  };
};

const getMaxAvailSizeResponse = (payload) => {
  return {
    instId: payload.instId,
    availBuy: payload.availBuy,
    availSell: payload.availSell,
  };
};

module.exports = {
  getMaxAvailSizeRequest,
  getMaxAvailSizeResponse,
};
