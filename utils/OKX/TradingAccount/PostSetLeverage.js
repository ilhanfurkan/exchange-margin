const postSetLeverageRequest = (payload) => {
    return {
        instId: payload.instId,
        ccy: payload.ccy,
        lever: payload.lever,
        mgnMode: payload.mgnMode,
        posSide: payload.posSide,
    };
  };
  
  const postSetLeverageResponse = (payload) => {
    return {
        lever: payload.lever,
        mgnMode: payload.mgnMode,
        instId: payload.instId,
        posSide: payload.posSide,
    };
  };
  
  module.exports = {
    postSetLeverageRequest,
    postSetLeverageResponse,
  };