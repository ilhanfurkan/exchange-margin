const { errorResponse } = require("../helpers/response");

exports.makeResponse = (response, data) => {
  if (data.code === "0") {
    const list = [];
    data.data.map((dt) => {
      list.push(response(dt));
    });
    return list;
  } else {
    return errorResponse(data.msg, data.code);
  }
};
