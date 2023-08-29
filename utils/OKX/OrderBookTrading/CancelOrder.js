const postCancelOrderRequest = (payload) => {
  return {
    instId: payload.instId,
    ordId: payload.ordId,
    clOrdId: payload.clOrdId,
  };
};

const postCancelOrderResponse = (payload) => {
  return {
    ordId: payload.ordId,
    clOrdId: payload.clOrdId,
    sCode: payload.sCode,
    sMsg: payload.sMsg,
  };
};

module.exports = {
  postCancelOrderRequest,
  postCancelOrderResponse,
};
