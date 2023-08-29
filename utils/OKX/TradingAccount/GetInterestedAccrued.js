const getInterestedAccruedRequest = (payload) => {
    return {
      type: payload.type,
      ccy: payload.ccy,
      instId: payload.instId,
      mgnMode: payload.mgnMode,
      after: payload.after,
      before: payload.before,
      limit: payload.limit,
    };
  };
  
  const getInterestedAccruedResponse = (payload) => {
    return {
        type: payload.type,
        ccy: payload.ccy,
        instId: payload.instId,
        mgnMode: payload.mgnMode,
        interest: payload.interest,
        interestRate: payload.interestRate,
        liab: payload.liab,
        ts: payload.ts,
    };
  };
  
  module.exports = {
    getInterestedAccruedRequest,
    getInterestedAccruedResponse,
  };