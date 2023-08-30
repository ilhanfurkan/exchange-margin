const getInterestLimitsRequest = (payload) => {
  return {
    type: payload.type,
    ccy: payload.ccy,
  };
};

const getInterestLimitsResponse = (payload) => {
  return {
    debt: payload.debt,
    interest: payload.interest,
    nextDiscountTime: payload.nextDiscountTime,
    nextInterestTime: payload.nextInterestTime,
    loanAlloc: payload.loanAlloc,
    records: [{
      ccy: payload.records.ccy,
      rate: payload.records.rate,
      loanQuota: payload.records.loanQuota,
      surplusLmt: payload.records.surplusLmt,
      surplusLmtDetails:[{
        allAcctRemainingQuota: payload.records.surplusLmtDetails.allAcctRemainingQuota,
        curAcctRemainingQuota: payload.records.surplusLmtDetails.curAcctRemainingQuota,
        platRemainingQuota: payload.records.surplusLmtDetails.platRemainingQuota,
      }],
      usedLmt: payload.record.usedLmt,
      interest: payload.record.interest,
      posLoan: payload.record.posLoan,
      availLoan: payload.record.availLoan,
      usedLoan: payload.record.usedLoan,
      avgRate: payload.record.avgRate,
    }]
      
    
  };
};

module.exports = {
  getInterestLimitsRequest,
  getInterestLimitsResponse,
};