const {
  fillOrderHistoryArchive,
  fillOrderRequest,
} = require("../services/Order/OrderService");

const {defaultResponse, errorResponse} = require("../helpers/response");
const {getOrderHistoryArchive} = require("../services/OKX/OrderBookTrading/OrderBookTradingService");
exports.placeOrder = async (req, res) => {
  try {
    console.log("first");
  } catch (error) {
    console.log("hi bitch!");
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const orderHistoryList = await getOrderHistoryArchive({instType:"SPOT"});
  
    const orderHistory = await fillOrderHistoryArchive(orderHistoryList);
    
    defaultResponse(res, orderHistoryList, 200, "OK: Successful");
    
  } catch (error) {
    errorResponse("Bad Request", 400);
  }
};
