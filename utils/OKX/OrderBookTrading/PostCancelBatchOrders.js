const postCancelBatchOrdersRequest = (payload) => {
  return {
    instId: payload.instId,
    clOrdId: payload.clOrdId,
    ordId: payload.ordId,
  };
};
const postCancelBatchOrdersResponse = (payload) => {
  return {
    ordId: payload.ordId,
    clOrdId: payload.clOrdId,
    sCode: payload.sCode,
    sMsg: payload.sMsg,
  };
};

module.exports = {
  postCancelBatchOrdersRequest,
  postCancelBatchOrdersResponse,
};