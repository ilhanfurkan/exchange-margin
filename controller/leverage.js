const { defaultResponse } = require("../helpers/response");
const { ResponseMessages } = require("../helpers/responseMessages");

const {
  postSetLeverage,
} = require("../services/OKX/TradingAccount/TradingAccountService");

exports.setLeverage = async (req, res) => {
  try {
    const leverageReq = await postSetLeverage(req.body);
    defaultResponse(res, leverageReq, ResponseMessages.Ok);
  } catch (error) {
    defaultResponse(res, null, ResponseMessages.InvalidRequest);
  }
};
