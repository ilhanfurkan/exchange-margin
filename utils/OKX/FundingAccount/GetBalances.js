const getBalancesRequest = (payload) => {
  return {
    ccy: payload.ccy,
  };
};

const getBalancesResponse = (payload) => {
  return {
    ccy: payload.ccy,
    bal: payload.bal,
    frozenBal: payload.frozenBal,
    availBal: payload.availBal,
  };
};

module.exports = {
  getBalancesRequest,
  getBalancesResponse,
};
