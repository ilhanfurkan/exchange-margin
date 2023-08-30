const { newGetRequest, newPostRequest } = require("../../helpers/okxRequest");
const {
  getBalancesRequest,
  getBalancesResponse,
} = require("../../utils/OKX/FundingAccount/GetBalances");
exports.getBalances = async (body) => {
  return newGetRequest(
    getBalancesRequest,
    getBalancesResponse,
    "asset/balances",
    body
  );
};
