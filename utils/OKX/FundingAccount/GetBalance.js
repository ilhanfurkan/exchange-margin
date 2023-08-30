const getBalanceRequest = (payload) => {
  return {
    ccy: payload.ccy,
  };
};

const getBalanceResponse = (payload) => {
  return {
    ccy: payload.ccy,
    bal: payload.bal,
    frozenBal: payload.frozenBal,
    availBal: payload.availBal,
  };
};

module.exports = {
  getBalanceRequest,
  getBalanceResponse,
};
