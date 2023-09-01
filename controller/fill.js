const { defaultResponse } = require("../helpers/response");

const { getInstruments } = require("../services/OKX/Public/PublicService");
const { fillMarket } = require("../services/Market/MarketService");
const { ResponseMessages } = require("../helpers/responseMessages");

exports.fillMarket = async (req, res) => {
  try {
    const list = await getInstruments({ instType: "MARGIN" });
    const marketList = await fillMarket(list);
    defaultResponse(res, marketList, ResponseMessages.Ok);
  } catch (error) {
    defaultResponse(res, null, ResponseMessages.InvalidRequest);
  }
};
