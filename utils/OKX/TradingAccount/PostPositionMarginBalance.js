const postPositionMarginBalanceRequest = (payload) => {
  return {
    instId: payload.instId,
    posSide: payload.posSide,
    type: payload.type,
    amt: payload.amt,
    ccy: payload.ccy,
    auto: payload.auto,
  };
};

const postPositionMarginBalanceResponse = (payload) => {
  return {
    instId: payload.instId,
    posSide: payload.posSide,
    amt: payload.amt,
    type: payload.type,
    leverage: payload.leverage,
    ccy: payload.ccy,
  };
};

module.exports = {
  postPositionMarginBalanceRequest,
  postPositionMarginBalanceResponse,
};
