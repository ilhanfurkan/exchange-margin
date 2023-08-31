const {
  successResponse,
  errorResponse,
  defaultResponse,
} = require("../helpers/response");

const { getInstruments } = require("../services/OKX/Public/PublicService");
const { fillMarket } = require("../services/Market/MarketService");

exports.fillMarket = async (req, res) => {
  try {
    const list = await getInstruments({ instType: "MARGIN" });
    const marketList = await fillMarket(list);
    defaultResponse(res, marketList, 200, "OK: Successful");
  } catch (error) {
    errorResponse("Bad Request", 400);
  }
};

