const {
  fillOrderHistoryArchive,
  fillOrderRequest,
} = require("../services/Order/OrderService");

const {
  getOrderHistoryArchive,
} = require("../services/OKX/OrderBookTrading/OrderBookTradingService");
const { defaultResponse } = require("../helpers/response");

const {
  postPlaceOrder,
} = require("../services/OKX/OrderBookTrading/OrderBookTradingService");
const { placeOrders } = require("../services/Order/OrderService");
const { ResponseMessages } = require("../helpers/responseMessages");

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
    const orderHistoryList = await getOrderHistoryArchive({ instType: "SPOT" });

    const orderHistory = await fillOrderHistoryArchive(orderHistoryList);

    defaultResponse(res, orderHistory, ResponseMessages.Ok);
  } catch (error) {
    defaultResponse(res, null, ResponseMessages.InvalidRequest);
  }
};
