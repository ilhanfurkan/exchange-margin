const {
  fillOrderHistoryArchive,
  fillOrderRequest,
  getOpenOrders,
} = require("../services/Order/OrderService");

const {
  getOrderHistoryArchive,
  getOrderList,
} = require("../services/OKX/OrderBookTrading/OrderBookTradingService");
const { defaultResponse } = require("../helpers/response");

const {
  postPlaceOrder,
} = require("../services/OKX/OrderBookTrading/OrderBookTradingService");
const { placeOrders } = require("../services/Order/OrderService");
const { ResponseMessages } = require("../helpers/responseMessages");
const {
  openOrders,
} = require("../services/OKX/OrderBookTrading/OrderBookTradingService");
const {
  postCancelOrder,
} = require("../services/OKX/OrderBookTrading/OrderBookTradingService");
exports.postPlaceOrder = async (req, res) => {
  try {
    const response = await postPlaceOrder(req.body);
    await placeOrders(req.body, response);
    defaultResponse(res, response, ResponseMessages.Ok);
  } catch (error) {
    defaultResponse(res, null, ResponseMessages.InvalidRequest);
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const orderHistoryList = await getOrderHistoryArchive({
      instType: "MARGIN",
    });

    const orderHistory = await fillOrderHistoryArchive(orderHistoryList);

    defaultResponse(res, orderHistory, ResponseMessages.Ok);
  } catch (error) {
    defaultResponse(res, null, ResponseMessages.InvalidRequest);
  }
};

exports.getOpenOrder = async (req, res) => {
  try {
    const openOrders = await getOrderList(req.body);
    defaultResponse(res, openOrders, ResponseMessages.Ok);
  } catch (error) {
    defaultResponse(res, null, ResponseMessages.InvalidRequest);
  }
};

exports.postCancelOrder = async (req, res) => {
  try {
    const response = await postCancelOrder(req.body);

    defaultResponse(res, response, ResponseMessages.Ok);
  } catch (error) {
    defaultResponse(res, null, ResponseMessages.InvalidRequest);
  }
};
