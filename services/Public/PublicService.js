const { newGetRequest, newPostRequest } = require("../../helpers/okxRequest");
const {
  getInstrumentsRequest,
  getInstrumentsResponse,
} = require("../../utils/OKX/Public/GetInstruments");
exports.getInstruments = async (body) => {
  return await newGetRequest(
    getInstrumentsRequest,
    getInstrumentsResponse,
    "public/instruments",
    body
  );
};
