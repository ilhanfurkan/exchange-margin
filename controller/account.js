const {
  successResponse,
  errorResponse,
  defaultResponse,
} = require("../helpers/response");

const {
  postSetAccountLevel,
} = require("../services/OKX/TradingAccount/TradingAccountService");

exports.setAccountMode = async (req, res) => {
  try {
    const accountLevel = await postSetAccountLevel(req.body);
    defaultResponse(res, accountLevel, 200, "OK: Successful");
  } catch (error) {
    errorResponse("Bad Request", 400);
  }
};
