const postSetAccountLevelRequest = (payload) => {
  return {
    acctLv: payload.acctLv,
  };
};

const postSetAccountLevelResponse = (payload) => {
  return {
    acctLv: payload.acctLv,
  };
};

module.exports = {
  postSetAccountLevelRequest,
  postSetAccountLevelResponse,
};
