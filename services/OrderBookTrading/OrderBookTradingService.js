const { newGetRequest, newPostRequest } = require("../../helpers/okxRequest");
const {
  getFillsRequest,
  getFillsResponse,
} = require("../../utils/OKX/OrderBookTrading/GetFills");
const {
  getFillsHistoryRequest,
  getFillsHistoryResponse,
} = require("../../utils/OKX/OrderBookTrading/GetFillsHistory");
const {
  getOneClickRepayCurrencyListRequest,
  getOneClickRepayCurrencyListResponse,
} = require("../../utils/OKX/OrderBookTrading/GetOneClickRepayCurrencyList");
const {
  getOneClickRepayHistoryRequest,
  getOneClickRepayHistoryResponse,
} = require("../../utils/OKX/OrderBookTrading/GetOneClickRepayHistory");
const {
  getOrderHistoryRequest,
  getOrderHistoryResponse,
} = require("../../utils/OKX/OrderBookTrading/GetOrderHistory");
const {
  getOrderHistoryArchiveRequest,
  getOrderHistoryArchiveResponse,
} = require("../../utils/OKX/OrderBookTrading/GetOrderHistoryArchive");
const {
  getOrderListRequest,
  getOrderListResponse,
} = require("../../utils/OKX/OrderBookTrading/GetOrderList");
const {
  getTickersRequest,
  getTickersResponse,
} = require("../../utils/OKX/OrderBookTrading/GetTickers");
const {
  postBatchOrdersRequest,
  postBatchOrdersResponse,
} = require("../../utils/OKX/OrderBookTrading/PostBatchOrders");
const {
  postCancelOrderRequest,
  postCancelOrderResponse,
} = require("../../utils/OKX/OrderBookTrading/PostCancelOrder");
const {
  postClosePositionRequest,
  postClosePositionResponse,
} = require("../../utils/OKX/OrderBookTrading/PostClosePosition");
const {
  postOneClickRepayRequest,
  postOneClickRepayResponse,
} = require("../../utils/OKX/OrderBookTrading/PostOneClickRepay");
const {
  postPlaceOrderRequest,
  postPlaceOrderResponse,
} = require("../../utils/OKX/OrderBookTrading/PostPlaceOrder");

exports.getFills = async (body) => {
  return newGetRequest(getFillsRequest, getFillsResponse, "trade/fills", body);
};

exports.getFillsHistory = async (body) => {
  return newGetRequest(
    getFillsHistoryRequest,
    getFillsHistoryResponse,
    "trade/fills-history",
    body
  );
};

exports.getOneClickRepayCurrencyList = async (body) => {
  return newGetRequest(
    getOneClickRepayCurrencyListRequest,
    getOneClickRepayCurrencyListResponse,
    "trade/one-click-repay-currency-list",
    body
  );
};

exports.getOneClickRepayHistory = async (body) => {
  return newGetRequest(
    getOneClickRepayHistoryRequest,
    getOneClickRepayHistoryResponse,
    "trade/one-click-repay-history",
    body
  );
};

exports.getOrderHistory = async (body) => {
  return newGetRequest(
    getOrderHistoryRequest,
    getOrderHistoryResponse,
    "trade/orders-history",
    body
  );
};

exports.getOrderHistoryArchive = async (body) => {
  return newGetRequest(
    getOrderHistoryArchiveRequest,
    getOrderHistoryArchiveResponse,
    "trade/orders-history-archive",
    body
  );
};

exports.getOrderList = async (body) => {
  return newGetRequest(
    getOrderListRequest,
    getOrderListResponse,
    "trade/orders-pending",
    body
  );
};

exports.getTickers = async (body) => {
  return newGetRequest(
    getTickersRequest,
    getTickersResponse,
    "market/tickers",
    body
  );
};

exports.postCancelOrder = async (body) => {
  return newPostRequest(
    postCancelOrderRequest,
    postCancelOrderResponse,
    "trade/cancel-order",
    body
  );
};

exports.postClosePosition = async (body) => {
  return newPostRequest(
    postClosePositionRequest,
    postClosePositionResponse,
    "trade/close-position",
    body
  );
};

exports.postOneClickRepay = async (body) => {
  return newPostRequest(
    postOneClickRepayRequest,
    postOneClickRepayResponse,
    "trade/one-click-repay",
    body
  );
};

exports.postPlaceOrder = async (body) => {
  return newPostRequest(
    postPlaceOrderRequest,
    postPlaceOrderResponse,
    "trade/order",
    body
  );
};
