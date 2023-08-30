const getLeverageInfoRequest = (payload) => {
  return {
    instId: payload.instId,
    mgnMode: payload.mgnMode,
  };
};

const getLeverageInfoResponse = (payload) => {
  return {
    instId: payload.instId,
    mgnMode: payload.mgnMode,
    posSide: payload.posSide,
    lever: payload.lever,
  };
};

module.exports = {
  getLeverageInfoRequest,
  getLeverageInfoResponse,
};
