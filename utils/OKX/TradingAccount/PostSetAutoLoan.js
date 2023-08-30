const postSetAutoLoanRequest = (payload) => {
  return {
    autoLoan: payload.autoLoan,
  };
};
const postSetAutoLoanResponse = (payload) => {
  return {
    autoLoan: payload.autoLoan,
  };
};

module.exports = {
  postSetAutoLoanRequest,
  postSetAutoLoanResponse,
};