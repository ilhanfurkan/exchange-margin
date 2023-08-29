const getAdjustLeverageInfoRequest = (payload) => {
    return {
      instType: payload.instType,
      mgnMode: payload.mgnMode,
      lever: payload.lever,
      instId: payload.instId,
      ccys: payload.ccys,
      posSide: payload.posSide,
    };
  };
  
  const getAdjustLeverageInfoResponse = (payload) => {
    return {
      estAvailQuoteTrans: payload.estAvailQuoteTrans,
      estAvailTrans: payload.estAvailTrans,
      estLiqPx: payload.estLiqPx,
      estMgn: payload.estMgn,
      estQuoteMgn: payload.estQuoteMgn,
      estMaxAmt: payload.estMaxAmt,
      estQuoteMaxAmt: payload.estQuoteMaxAmt,
      existOrd: payload.existOrd,
      maxLever: payload.maxLever,
      minLever: payload.minLever,  
    };
  };
  
  module.exports = {
    getAdjustLeverageInfoRequest,
    getAdjustLeverageInfoResponse,
  };
  