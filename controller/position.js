const { defaultResponse } = require("../helpers/response");

const { getPositions } = require("../services/OKX/TradingAccount/TradingAccountService");
const { ResponseMessages } = require("../helpers/responseMessages");

exports.getPosition = async (req, res) => {
  try {
    const positionList = await getPositions(req.body);
    defaultResponse(res, positionList, ResponseMessages.Ok);
  } catch (error) {
    defaultResponse(res, null, ResponseMessages.InvalidRequest);
  }
};
