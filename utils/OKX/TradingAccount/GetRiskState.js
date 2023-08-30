// There is no Request for this API
  
const getRiskStateRequest = (payload) => {
    return {
      // No Request
    };
}
  const getAccountRiskStateResponse = (payload) => {
    return {
     atRisk: payload.atRisk,
     atRiskIdx: [payload.atRiskIdx],
     atRiskMgn: [payload.atRiskMgn],
     ts: payload.ts,
    };
  };
  
  module.exports = {
    getRiskStateRequest,
    getAccountRiskStateResponse,
  };
  