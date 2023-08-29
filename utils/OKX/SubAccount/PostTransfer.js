const postTransferRequest = (payload) => {
  return {
    ccy: payload.ccy,
    amt: payload.amt,
    from: payload.from,
    to: payload.to,
    fromSubAccount: payload.fromSubAccount,
    toSubAccount: payload.toSubAccount,
    loanTrans: payload.loanTrans,
    omitPosRisk: payload.omitPosRisk,
  };
};

const postTransferResponse = (payload) => {
  return {
    transId: payload.transId,
  };
};

module.exports = {
  postTransferRequest,
  postTransferResponse,
};
