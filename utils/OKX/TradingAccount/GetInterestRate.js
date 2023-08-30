const getInterestRateRequest = (payload) => {
    return {
      ccy: payload.ccy,
    };
  };
  
  const getInterestRateResponse = (payload) => {
    return {
       interestRate: payload.interestRate,
       ccy: payload.ccy,
    };
  };
  
  module.exports = {
    getInterestRateRequest,
    getInterestRateResponse,
  };