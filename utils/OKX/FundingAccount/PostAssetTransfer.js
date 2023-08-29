const postAssetTransferRequest = (payload) => {
  return {
    type: payload.type,
    ccy: payload.ccy,
    amt: payload.amt,
    from: payload.from,
    to: payload.to,
    subAcct: payload.subAcct,
    loanTrans: payload.loanTrans,
    omitPosRisk: payload.loanTrans,
    clientId: payload.clientId,
  };
};
const postAssetTransferResponse = (payload) => {
  return {
    transId: payload.transId,
    clientId: payload.clientId,
    ccy: payload.ccy,
    from: payload.from,
    amt: payload.amt,
    to: payload.to,
  };
};

module.exports = {
  postAssetTransferRequest,
  postAssetTransferResponse,
};