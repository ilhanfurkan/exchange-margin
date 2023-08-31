const {
  newGetRequestHeaders,
  newPostRequestHeaders,
  newQueryParams,
  newRequestBody,
} = require("./okxRequestHeader");
const { errorResponse } = require("./response");
const axios = require("axios");

const { makeResponse } = require("../middleware/okxResponse");

exports.newGetRequest = async (request, response, url, body) => {
  try {
    const params = newQueryParams(request(body));
    const newHead = await newGetRequestHeaders(
      process.env.OKX_API_KEY,
      process.env.OKX_PASSPHRASE,
      process.env.OKX_SECRET_KEY,
      process.env.OKX_BASE_PATH + url + params
    );
    const result = await axios.get(
      process.env.OKX_URL + process.env.OKX_BASE_PATH + url + params,
      {
        headers: {
          ...newHead,
        },
      }
    );
    return makeResponse(response, result.data);
  } catch (error) {
    return errorResponse("Bad Request", 400, error.message);
  }
};

exports.newPostRequest = async (request, response, url, body) => {
  try {
    const requestBody = newRequestBody(request(body));
    const newHead = await newPostRequestHeaders(
      process.env.OKX_API_KEY,
      process.env.OKX_PASSPHRASE,
      process.env.OKX_SECRET_KEY,
      process.env.OKX_BASE_PATH + url
    );
    const result = await axios.post(
      process.env.OKX_URL + process.env.OKX_BASE_PATH + url,
      {
        headers: {
          ...newHead,
        },
        requestBody,
      }
    );
    return makeResponse(response, result.data);
  } catch (error) {
    return errorResponse("Bad Request", 400, error.message);
  }
};
