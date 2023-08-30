const { newGetRequest, newPostRequest } = require("../../helpers/okxRequest");
const {
  getBalancesRequest,
  getBalancesResponse,
} = require("../../utils/OKX/FundingAccount/GetBalances");
const {
  postAssetTransferRequest,
  postAssetTransferResponse,
} = require("../../utils/OKX/FundingAccount/PostAssetTransfer");
exports.getBalances = async (body) => {
  return newGetRequest(
    getBalancesRequest,
    getBalancesResponse,
    "asset/balances",
    body
  );
};

exports.postAssetTransfer = async (body) => {
  return newPostRequest(
    postAssetTransferRequest,
    postAssetTransferResponse,
    "asset/transfer",
    body
  );
};
