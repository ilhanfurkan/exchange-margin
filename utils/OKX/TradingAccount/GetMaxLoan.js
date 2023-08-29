const getMaxLoanRequest = (payload) => {
    return {
      instId: payload.instId,
      mgnMode: payload.mgnMode,
      mgnCcy: payload.mgnCcy,
    };
  };
  
  const getMaxLoanResponse = (payload) => {
    return {
      instId: payload.instId,
      mgnMode: payload.mgnMode,
      mgnCcy: payload.mgnCcy,
      maxLoan: payload.maxLoan,
      ccy: payload.ccy,
      side: payload.side,
    };
  };
  
  module.exports = {
    getMaxLoanRequest,
    getMaxLoanResponse,
  };
  