const getVipLoanOrderDetailRequest = (payload) => {
  return {
    ordId: payload.ordId,
    ccy: payload.ccy,
    after: payload.after,
    before: payload.before,
    limit: payload.limit,
  };
};

const getVipLoanOrderDetailResponse = (payload) => {
  return {
    ts: payload.ts,
    ccy: payload.ccy,
    type: payload.type,
    rate: payload.rate,
    amt: payload.amt,
    failReason: payload.failReason,
  };
};


module.exports = {
  getVipLoanOrderDetailRequest,
  getVipLoanOrderDetailResponse,
};