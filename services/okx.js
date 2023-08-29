// const { response } = require('express');
const okxRequest = require("../helpers/okxRequest");
const response = require("../helpers/response");
const axios = require("axios");
const {
  getOrderHistoryArchiveRequest,
  getOrderHistoryArchiveResponse,
} = require("../utils/OKX/OrderBookTrading/GetOrderHistoryArchive");
const { makeList } = require("../middleware/makeList");

exports.getInstruments = async function (body) {
  try {
    const newHead = await okxRequest.newGetRequestHeaders(
      "328f1b3a-ade9-47e1-a90e-48c534884bc8",
      "G67O!b#AbOsT530C3e8FBg6g",
      "6E9D31BA87D0265F444D68E9B7C3DEB1",
      process.env.OKX_BASE_PATH + "trade/orders-history-archive?instType=SPOT"
    );
    const result = await axios.get(
      process.env.OKX_URL +
        process.env.OKX_BASE_PATH +
        "trade/orders-history-archive?instType=SPOT",
      {
        headers: {
          ...newHead,
        },
      }
    );
    return makeList(getOrderHistoryArchiveResponse, result.data.data);
  } catch (error) {
    return response.errorResponse(res, "Bad Request", 400, error.message);
  }
};
