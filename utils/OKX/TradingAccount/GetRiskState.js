// There is no Request for this API
  
const getRiskStateRequest = (payload) => {
    return {
      // No Request
    };
}
  const getRiskStateResponse = (payload) => {
    return {
     atRisk: payload.atRisk,
     atRiskIdx: [payload.atRiskIdx],
     atRiskMgn: [payload.atRiskMgn],
     ts: payload.ts,
    };
  };
  
  module.exports = {
    getRiskStateRequest,
    getRiskStateResponse,
  };
  