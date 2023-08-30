const postMMPResetRequest = (payload) => {
  return {
    instType: payload.instType,
    instFamily: payload.instFamily,
  };
};
const postMMPResetResponse = (payload) => {
  return {
    result: payload.result,
  };
};

module.exports = {
  postMMPResetRequest,
  postMMPResetResponse,
};