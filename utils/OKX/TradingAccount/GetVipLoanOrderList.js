const getVipLoanOrderListRequest = (payload) => {
  return {
    ordId: payload.ordId,
    state: payload.state,
    ccy: payload.ccy,
    after: payload.after,
    before: payload.before,
    limit: payload.limit,
  };
};

const getVipLoanOrderListResponse = (payload) => {
  return {
    ts: payload.ts,
    nextRefreshTime: payload.nextRefreshTime,
    ccy: payload.ccy,
    ordId: payload.ordId,
    state: payload.state,
    origRate: payload.origRate,
    curRate: payload.curRate,
    dueAmt: payload.dueAmt,
    borrowAmt: payload.borrowAmt,
    repayAmt: payload.repayAmt,
  };
};

module.exports = {
  getVipLoanOrderListRequest,
  getVipLoanOrderListResponse,
};