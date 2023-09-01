exports.ResponseMessages = {
  Ok: {
    httpStatus: 200,
    code: "0",
    message: "OK: Successful",
  },
  InvalidCredentials: {
    httpStatus: 401,
    code: "100-1000",
    message: "Invalid Credentials!",
  },
  InvalidSession: {
    httpStatus: 401,
    code: "100-1001",
    message: "Invalid Session!",
  },
  InvalidRequest: {
    httpStatus: 400,
    code: "100-1002",
    message: "Invalid Request!",
  },
};
