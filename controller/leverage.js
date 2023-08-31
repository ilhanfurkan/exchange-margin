const {
  successResponse,
  errorResponse,
  defaultResponse,
} = require("../helpers/response");

const {
  postSetLeverage,
} = require("../services/OKX/TradingAccount/TradingAccountService");

exports.setLeverage = async (req, res) => {
  try {
    const leverageReq = await postSetLeverage(req.body);
    defaultResponse(res, leverageReq, 200, "OK: Successful");
  } catch (error) {
    errorResponse("Bad Request", 400);
  }
};
