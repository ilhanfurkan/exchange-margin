const {
  successResponse,
  errorResponse,
  defaultResponse,
} = require("../helpers/response");

const {
  getInstrumentsRequest,
  getInstrumentsResponse,
} = require("../utils/OKX/Public/GetInstruments");

const { getInstruments } = require("../services/OKX/Public/PublicService");
const marketDocument = require("../models/marketDocument");
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
