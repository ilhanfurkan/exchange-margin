const postSetPositionRequest = (payload) => {
    return {
        posMode: payload.posMode,
    };
  };
  
  const postSetPositionResponse = (payload) => {
    return {
        posMode: payload.posMode,
    };
  };
  
  module.exports = {
    postSetPositionRequest,
    postSetPositionResponse,
  };