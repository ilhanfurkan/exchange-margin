const getMaxWithdrawalRequest = (payload) => {
    return {
      ccy: payload.ccy,
    };
  };
  
  const getMaxWithdrawalResponse = (payload) => {
    return {
      ccy: payload.ccy,
      maxWd: payload.maxWd,
      maxWdEx: payload.maxWdEx,
      spotOffsetMaxWd: payload.spotOffsetMaxWd,
      spotOffsetMaxWdEx: payload.spotOffsetMaxWdEx,
    };
  };
  
  module.exports = {
    getMaxWithdrawalRequest,
    getMaxWithdrawalResponse,
  };
  