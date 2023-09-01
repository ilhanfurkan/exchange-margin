const { defaultResponse } = require("../helpers/response");
const { ResponseMessages } = require("../helpers/responseMessages");

const {
  postSetAccountLevel,
} = require("../services/OKX/TradingAccount/TradingAccountService");

exports.setAccountMode = async (req, res) => {
  try {
    const accountLevel = await postSetAccountLevel(req.body);
    defaultResponse(res, accountLevel, ResponseMessages.Ok);
  } catch (error) {
    defaultResponse(res, null, ResponseMessages.InvalidRequest);
  }
};
