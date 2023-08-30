const { signPost, signGet } = require("./okxSign");

exports.newGetRequestHeaders = async function (
  okxKey,
  okxPassphrase,
  secretKey,
  path
) {
  var myDate = new Date();
  var myEpoch = myDate.getTime() / 1000.0;
  const timestamp = myEpoch.toString();
  const signedData = signGet(timestamp, secretKey, path);
  const headers = {};
  headers["Content-Type"] = "application/json";
  headers["Accept"] = "application/json";
  headers["OK-ACCESS-KEY"] = okxKey;
  headers["OK-ACCESS-SIGN"] = signedData;
  headers["OK-ACCESS-TIMESTAMP"] = timestamp;
  headers["OK-ACCESS-PASSPHRASE"] = okxPassphrase;
  return headers;
};

exports.newPostRequestHeaders = async function (
  okxKey,
  okxPassphrase,
  secretKey,
  path
) {
  var myDate = new Date(); // Your timezone!
  var myEpoch = myDate.getTime() / 1000.0;
  const timestamp = myEpoch.toString();

  const signdData = signPost(timestamp, secretKey, path, body);

  const headers = {};
  headers["Content-Type"] = "application/json";
  headers["Accept"] = "application/json";
  headers["OK-ACCESS-KEY"] = okxKey;
  headers["OK-ACCESS-SIGN"] = signdData;
  headers["OK-ACCESS-TIMESTAMP"] = timestamp;
  headers["OK-ACCESS-PASSPHRASE"] = okxPassphrase;

  return headers;
};

exports.newRequestBody = (body) => {
  return JSON.stringify(body);
};

exports.newQueryParams = (params) => {
  if (params === null) return "";

  const val = JSON.parse(JSON.stringify(params));

  let query = "";

  for (const [key, value] of Object.entries(val)) {
    const valueOf = value !== null ? String(value) : "";

    if (valueOf.trim() !== "") {
      if (query === "") query += "?";
      if (query.length > 1) query += "&";

      query += `${key}=${encodeURIComponent(valueOf)}`;
    }
  }

  return query;
};
