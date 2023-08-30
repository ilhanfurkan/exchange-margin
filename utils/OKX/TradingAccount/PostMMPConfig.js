const postMMPConfigRequest = (payload) => {
  return {
    instFamily: payload.instFamily,
    timeInterval: payload.timeInterval,
    frozenInterval: payload.frozenInterval,
    qtyLimit: payload.qtyLimit,
  };
};
const postMMPConfigResponse = (payload) => {
  return {
    instFamily: payload.instFamily,
    timeInterval: payload.timeInterval,
    frozenInterval: payload.frozenInterval,
    qtyLimit: payload.qtyLimit,
  };
};

module.exports = {
  postMMPConfigRequest,
  postMMPConfigResponse,
};