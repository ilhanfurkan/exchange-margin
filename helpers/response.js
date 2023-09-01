exports.defaultResponse = (res, result, responseMessage) => {
  return res.status(responseMessage.httpStatus).json({
    timestamp: new Date().toISOString(),
    status: responseMessage.httpStatus,
    message: responseMessage.message,
    path: "",
    code: responseMessage.code,
    data: result,
  });
};
