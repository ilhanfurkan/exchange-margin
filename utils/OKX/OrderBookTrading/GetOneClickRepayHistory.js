const getOneClickRepayHistoryRequest = (payload) => {
  return {
    after: payload.after,
    before: payload.before,
    limit: payload.limit,
  };
};
const getOneClickRepayHistoryResponse = (payload) => {
  return {
    debtCcy: payload.debtCcy,
    debtSz: payload.debtSz,
    repayCcy: payload.repayCcy,
    repaySz: payload.repaySz,
    status: payload.status,
    uTime: payload.uTime,
  };
};

module.exports = {
  getOneClickRepayHistoryRequest,
  getOneClickRepayHistoryResponse,
};
