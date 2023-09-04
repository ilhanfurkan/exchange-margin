const {
  newGetRequestHeaders,
  newPostRequestHeaders,
  newQueryParams,
  newRequestBody,
} = require("./okxRequestHeader");
const { defaultResponse } = require("./response");
const axios = require("axios");

const { makeResponse } = require("../middleware/okxResponse");
const res = require("express/lib/response");
const { ResponseMessages } = require("./responseMessages");

exports.newGetRequest = async (request, response, url, body) => {
  try {
    const params = newQueryParams(request(body));

    const newHead = await newGetRequestHeaders(
      "924f1240-6840-43a4-b2e7-c9ada5d6b884",
      "V6jD!b#AgVdtVqJg3e8FO7ib",
      "B9650791E0076E73D8C3D8BF54A47FF0",
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
    return defaultResponse(result, null, ResponseMessages.InvalidCredentials);

  }
};

exports.newPostRequest = async (request, response, url, body) => {
  try {
    const requestBody = newRequestBody(request(body));
    const newHead = await newPostRequestHeaders(
      "924f1240-6840-43a4-b2e7-c9ada5d6b884",
      "V6jD!b#AgVdtVqJg3e8FO7ib",
      "B9650791E0076E73D8C3D8BF54A47FF0",
      process.env.OKX_BASE_PATH + url,
      requestBody
    );
    const result = await axios.post(
      process.env.OKX_URL + process.env.OKX_BASE_PATH + url,
      requestBody,
      {
        headers: {
          ...newHead,
        },
      }
    );

    return makeResponse(response, result.data);
  } catch (error) {
    console.log(error);
    return defaultResponse(result, null, ResponseMessages.InvalidCredentials);
  }
};
