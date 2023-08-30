const postSetIsolatedModeRequest = (payload) => {
  return {
    isoMode: payload.isoMode,
    type: payload.type,
  };
};

const postSetIsolatedModeResponse = (payload) => {
  return {
    instId: payload.instId,
    mgnMode: payload.mgnMode,
    posSide: payload.posSide,
    lever: payload.lever,
  };
};

module.exports = {
  postSetIsolatedModeRequest,
  postSetIsolatedModeResponse,
};
