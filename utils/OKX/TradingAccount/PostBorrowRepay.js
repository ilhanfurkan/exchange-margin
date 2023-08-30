const postBorrowRepayRequest = (payload) => {
  return {
    ccy: payload.ccy,
    side: payload.side,
    amt: payload.amt,
    ordId: payload.ordId,
  };
};

const postBorrowRepayResponse = (payload) => {
  return {
    ccy: payload.ccy,
    side: payload.side,
    amt: payload.amt,
    ordId: payload.ordId,
    state: payload.state,
  };
};

module.exports = {
  postBorrowRepayRequest,
  postBorrowRepayResponse,
};
