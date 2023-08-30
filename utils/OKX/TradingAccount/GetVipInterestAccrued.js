const getVipInterestAccruedRequest = (payload) => {
    return {
      ccy: payload.ccy,
      ordId: payload.ordId,
      after: payload.after,
      before: payload.before,
      limit: payload.limit,
    };
  };
  
  const getVipInterestAccruedResponse = (payload) => {
    return {
      ordId: payload.ordId,
      ccy: payload.ccy,
      interest: payload.interest,
      interestRate: payload.interestRate,
      liab: payload.liab,
      ts: payload.ts,
    };
  };
  
  
  module.exports = {
    getVipInterestAccruedRequest,
    getVipInterestAccruedResponse,
  };