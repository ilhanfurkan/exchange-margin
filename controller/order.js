const {
  fillOrderHistory,
  fillOrderRequest,
} = require("../services/Order/OrderService");

exports.placeOrder = async (req, res) => {
  try {
    console.log("first");
  } catch (error) {
    console.log("hi bitch!");
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const list = await getInstruments({ instType: "MARGIN" });
    const orderHistory = await fillOrderHistory(list);
    defaultResponse(orderHistory, 200, "OK: Successful");
  } catch (error) {
    errorResponse("Bad Request", 400);
  }
};
