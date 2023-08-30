const getBorrowRepayHistoryRequest = (payload) => {
    return {
      ccy: payload.ccy,
      after: payload.after,
      before: payload.before,
      limit: payload.limit,
    };
  };
  
  const getBorrowRepayHistoryResponse = (payload) => {
    return {
    ccy: payload.ccy,
    type: payload.type,
    tradedLoan: payload.tradedLoan,
    usedLoan: payload.usedLoan,
    ts: payload.ts,
    };
  };
  
  module.exports = {
    getBorrowRepayHistoryRequest,
    getBorrowRepayHistoryResponse,
  };