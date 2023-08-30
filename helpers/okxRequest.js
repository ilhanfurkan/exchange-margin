const {
  newGetRequestHeaders,
  newPostRequestHeaders,
  newQueryParams,
  newRequestBody,
} = require("./okxRequestHeader");
const { errorResponse } = require("./response");
const axios = require("axios");

const { makeResponse } = require("../middleware/okxResponse");

const newGetRequest = async (request, response, url, body) => {
  try {
    const params = newQueryParams(request(body));
    const newHead = await newGetRequestHeaders(
      "328f1b3a-ade9-47e1-a90e-48c534884bc8",
      "G67O!b#AbOsT530C3e8FBg6g",
      "6E9D31BA87D0265F444D68E9B7C3DEB1",
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
    return errorResponse(res, "Bad Request", 400, error.message);
  }
};
const newPostRequest = async (request, response, url, body) => {
  try {
    const requestBody = newRequestBody(request(body));
    const newHead = await newPostRequestHeaders(
      "328f1b3a-ade9-47e1-a90e-48c534884bc8",
      "G67O!b#AbOsT530C3e8FBg6g",
      "6E9D31BA87D0265F444D68E9B7C3DEB1",
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
    return errorResponse(res, "Bad Request", 400, error.message);
  }
};
