const postQuickMarginBorrowRepayRequest = (payload) => {
    return {
      instId: payload.instId,
      ccy: payload.ccy,
      side: payload.side,
      amt: payload.amt,
    };
  };
  
  const postQuickMarginBorrowRepayResponse = (payload) => {
    return {
      instId: payload.instId,
      ccy: payload.ccy,
      side: payload.side,
      amt: payload.amt,
    };
  };
  
  module.exports = {
    postQuickMarginBorrowRepayRequest,
    postQuickMarginBorrowRepayResponse,
  };
  