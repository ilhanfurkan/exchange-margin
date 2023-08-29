const postOneClickRepayRequest = (payload) => {
  return {
    debtCcy: payload.debtCcy,
    repayCcy: payload.repayCcy,
  };
};
const postOneClickRepayResponse = (payload) => {
  return {
    status: payload.status,
    debtCcy: payload.debtCcy,
    repayCcy: payload.repayCcy,
    fillDebtSz: payload.fillDebtSz,
    fillRepaySz: payload.fillRepaySz,
    uTime: payload.uTime,
  };
};

module.exports = {
  postOneClickRepayRequest,
  postOneClickRepayResponse,
};
