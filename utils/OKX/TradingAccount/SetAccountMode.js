const setAccountModeRequest = (payload) => {
  return {
    acctLv: payload.acctLv,
  };
};

const setAccountModeResponse = (payload) => {
  return {
    acctLv: payload.acctLv,
  };
};

module.exports = {
  setAccountModeRequest,
  setAccountModeResponse,
};
