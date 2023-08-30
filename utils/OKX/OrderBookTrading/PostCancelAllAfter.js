const postCancelAllAfterRequest = (payload) => {
  return {
    timeOut: payload.timeOut,
  };
};
const postCancelAllAfterResponse = (payload) => {
  return {
    triggerTime: payload.triggerTime,
    ts: payload.ts,
  };
};

module.exports = {
  postCancelAllAfterRequest,
  postCancelAllAfterResponse,
};
