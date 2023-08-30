const postClosePositionRequest = (payload) => {
  return {
    instId: payload.instId,
    posSide: payload.posSide,
    mgnMode: payload.mgnMode,
    ccy: payload.ccy,
    autoCxl: payload.autoCxl,
    clOrdId: payload.clOrdId,
    tag: payload.tag,
  };
};

const postClosePositionResponse = (payload) => {
  return {
    instId: payload.instId,
    posSide: payload.posSide,
    clOrdId: payload.clOrdId,
    tag: payload.tag,
  };
};

module.exports = {
  postClosePositionRequest,
  postClosePositionResponse,
};
