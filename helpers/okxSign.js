const CryptoJS = require("crypto-js");

exports.signGet = (timestamp, secretKey, path) => {
  const sign = CryptoJS.enc.Base64.stringify(
    CryptoJS.HmacSHA256(timestamp + "GET" + path, secretKey)
  );

  return sign;
};

exports.signPost = (timestamp, secretKey, path, body) => {
  const sign = CryptoJS.enc.Base64.stringify(
    CryptoJS.HmacSHA256(timestamp + "POST" + path + body, secretKey)
  );
  return sign;
};
