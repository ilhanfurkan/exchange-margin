exports.defaultResponse = (res, result, code, message) => {
  return res.status(code).json(result);
};

exports.successResponse = (result, code, message) => {
  return res.status(code).json({
    timestamp: new Date().toISOString(),
    status: code,
    message,
    path: res.req?.path,
    data: result,
  });
};

exports.errorResponse = (message, code) => {
  return {
    timestamp: new Date().toISOString(),
    status: code,
    message,
  };
};
