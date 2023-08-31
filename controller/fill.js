const {
  successResponse,
  errorResponse,
  defaultResponse,
} = require("../helpers/response");

const {
  getInstrumentsRequest,
  getInstrumentsResponse,
} = require("../utils/OKX/Public/GetInstruments")

const { getInstruments } = require("../services/Public/PublicService");
const marketDocument = require('../models/marketDocument');

exports.fillMarket = async (req, res) => {
  try {
    const list = await getInstruments(req.body);
    list.forEach(async (item) => {
      await new marketDocument(getInstrumentsResponse(item)).save();
    });
    defaultResponse(res, list, 200, "OK: Successful");
  } catch (error) {
    errorResponse("Bad Request", 400);
  }
};