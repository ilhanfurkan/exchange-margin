const postMassCancelRequest = (payload) => {
  return {
    instType: payload.instType,
    instFamily: payload.instFamily,
  };
};
const postMassCancelResponse = (payload) => {
  return {
    result: payload.result,
  };
};

module.exports = {
  postMassCancelRequest,
  postMassCancelResponse,
};