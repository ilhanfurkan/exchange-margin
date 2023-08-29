const { sign, signPost } = require("./okx_api_create");

exports.newGetRequestHeaders = async function (
  okxKey,
  okxPassphrase,
  secretKey,
  path,
) {
  var myDate = new Date();
  var myEpoch = myDate.getTime() / 1000.0;
  const timestamp = myEpoch.toString();
  const signedData = sign(timestamp, secretKey, path);
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
    path,
    method
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
  