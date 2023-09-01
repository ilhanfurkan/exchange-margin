const {
  fillOrderHistoryArchive,
  fillOrderRequest,
} = require("../services/Order/OrderService");

const {
  getOrderHistoryArchive,
} = require("../services/OKX/OrderBookTrading/OrderBookTradingService");
const {
  successResponse,
  errorResponse,
  defaultResponse,
} = require("../helpers/response");

const {
  postPlaceOrder,
} = require("../services/OKX/OrderBookTrading/OrderBookTradingService");
const { placeOrders } = require("../services/Order/OrderService");

exports.postPlaceOrder = async (req, res) => {
  try {
    const response = await postPlaceOrder(req.body);
    await placeOrders(req.body, response);
    defaultResponse(res, response, 200, "OK: Successful");
  } catch (error) {
    errorResponse("Bad Request", 400);
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const orderHistoryList = await getOrderHistoryArchive({ instType: "SPOT" });

    const orderHistory = await fillOrderHistoryArchive(orderHistoryList);

    defaultResponse(res, orderHistoryList, 200, "OK: Successful");
  } catch (error) {
    errorResponse("Bad Request", 400);
  }
};
