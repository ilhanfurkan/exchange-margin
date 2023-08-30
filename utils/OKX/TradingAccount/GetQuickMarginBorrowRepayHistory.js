const getQuickMarginBorrowRepayHistoryRequest = (payload) => {
  return {
    instId: payload.instId,
    ccy: payload.ccy,
    side: payload.side,
    after: payload.after,
    before: payload.before,
    begin: payload.begin,
    end: payload.end,
    limit: payload.limit,
  };
};

const getQuickMarginBorrowRepayHistoryResponse = (payload) => {
  return {
   instId: payload.instId,
   ccy: payload.ccy,
   side: payload.side,
   accBorrowed: payload.accBorrowed,
   amt: payload.amt,
   refId: payload.refId,
   ts: payload.ts,
  };
};

module.exports = {
  getQuickMarginBorrowRepayHistoryRequest,
  getQuickMarginBorrowRepayHistoryResponse,
};
