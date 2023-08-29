exports.defaultResponse = (res, result, code, message) => { 
    return res.status(code).json(result);
}


exports.successResponse = (res, result, code, message) => {
    return res.status(code).json({
      timestamp: new Date().toISOString(),
      status: code,
      message,
      path: res.req?.path,
      data: result,
    });
  };
  
  exports.errorResponse = (res, message, code) => {
    return res.status(code).json({
      timestamp: new Date().toISOString(),
      status: code,
      message,
      path: res.req?.path,
      data: res.req?.body,
    });
  };