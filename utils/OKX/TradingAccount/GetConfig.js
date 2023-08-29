const getConfigRequest = (payload) => {
    return {
        //request parameters none
    };
  };
  
  const getConfigResponse = (payload) => {
    return {
        uid: payload.uid,
        mainUid: payload.mainUid,
        acctLv: payload.acctLv,
        posMode: payload.posMode,
        autoLoan: payload.autoLoan, 
        greeksType: payload.greeksType,
        level: payload.level,
        levelTmp: payload.levelTmp,
        ctIsoMode: payload.ctIsoMode,
        mgnIsoMode: payload.mgnIsoMode,
        spotOffsetType: payload.spotOffsetType,
        roleType: payload.roleType,
        traderInsts: payload.traderInsts,
        opAuth: payload.opAuth,
        kycLv: payload.kycLv,
        label: payload.label,
        ip: payload.ip,
        perm: payload.perm,
    };
  };
  
  module.exports = {
    getConfigRequest,
    getConfigResponse,
  };