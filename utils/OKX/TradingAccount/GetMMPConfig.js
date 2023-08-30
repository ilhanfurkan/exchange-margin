const getMMPConfigGetRequest = (payload) => {
  return {
    instFamily: payload.instFamily,
  };
};
const getMMPConfigGetResponse = (payload) => {
  return {
    instFamily: payload.instFamily,
    mmpFrozen: payload.mmpFrozen,
    mmpFrozenUntil: payload.mmpFrozen,
    timeInterval: payload.timeInterval,
    frozenInterval: payload.frozenInterval,
    qtyLimit: payload.mmpFrozen,

  };
};

module.exports = {
  getMMPConfigGetRequest,
  getMMPConfigGetResponse,
};