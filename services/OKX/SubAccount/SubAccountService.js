const { newGetRequest, newPostRequest } = require("../../helpers/okxRequest");
const {
  getBalancesRequest,
  getBalancesResponse,
} = require("../../utils/OKX/SubAccount/GetBalances");
const {
  getMaxWithdrawalRequest,
  getMaxWithdrawalResponse,
} = require("../../utils/OKX/SubAccount/GetMaxWithdrawal");
const {
  postTransferRequest,
  postTransferResponse,
} = require("../../utils/OKX/SubAccount/PostTransfer");
exports.getBalances = async (body) => {
  return await newGetRequest(
    getBalancesRequest,
    getBalancesResponse,
    "account/subaccount/balances",
    body
  );
};

exports.getMaxWithdrawal = async (body) => {
  return await newGetRequest(
    getMaxWithdrawalRequest,
    getMaxWithdrawalResponse,
    "account/subaccount/max-withdrawal",
    body
  );
};

exports.postTransfer = async (body) => {
  return await newPostRequest(
    postTransferRequest,
    postTransferResponse,
    "asset/subaccount/transfer",
    body
  );
};
