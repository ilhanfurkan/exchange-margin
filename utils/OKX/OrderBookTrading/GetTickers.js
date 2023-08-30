const getTickersRequest = (payload) => {
  return {
    instType: payload.instType,
    instFamily: payload.instFamily,
    uly: payload.uly,
  };
};
const getTickersResponse = (payload) => {
  return {
    instType: payload.instType,
    instId: payload.instId,
    last: payload.last,
    lastSz: payload.lastSz,
    askPx: payload.askPx,
    askSz: payload.askSz,
    bidPx: payload.bidPx,
    bidSz: payload.bidSz,
    open24h: payload.open24h,
    high24h: payload.high24h,
    low24h: payload.low24h,
    volCcy24h: payload.volCcy24h,
    vol24h: payload.vol24h,
    sodUtc0: payload.sodUtc0,
    sodUtc8: payload.sodUtc8,
    ts: payload.ts,
  };
};

module.exports = {
  getTickersRequest,
  getTickersResponse,
};
