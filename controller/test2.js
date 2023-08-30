const response = require("../helpers/response");
const okx = require("../services/okx");

exports.getPairs = async function (req, res) {
  try {
    const result = await okx.getInstruments(req.body);
    return response.defaultResponse(res, result, 200, "Success");
  } catch (error) {
    console.log("controller error", error);
    return response.errorResponse(res, "Bad Request", 400);
  }
};
