const getOneClickRepayCurrencyListRequest = (payload) => {
  return {
    debtType: payload.debtType,
  };
};
const getOneClickRepayCurrencyListResponse = (payload) => {
  return {
    debtData: [{
      debtCcy: payload.debtData.debtCcy,
      debtAmt: payload.debtData.debtAmt,
    }],
    debtType: payload.debtType,
    repayData: [{
      repayCcy: payload.repayData.repayCcy,
      repayAmt: payload.repayData.repayAmt,
    }]

  };
};

module.exports = {
  getOneClickRepayCurrencyListRequest,
  getOneClickRepayCurrencyListResponse,
};
