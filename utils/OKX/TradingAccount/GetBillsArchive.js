const getBillsArchiveRequest = (payload) => {
    return {
      instType: payload.instType,
      ccy: payload.ccy,
      mgnMode: payload.mgnMode,
      ctType: payload.ctType,
      type: payload.type,
      subType: payload.subType,
      after: payload.after,
      before: payload.before,
      begin: payload.begin,
      end: payload.end,
      limit: payload.limit,
    };
  };
  
  const getBillsArchiveResponse = (payload) => {
    return {
        instType: payload.instType,
        billId: payload.billId,
        type: payload.type,
        subType: payload.subType,
        ts: payload.ts,
        balChg: payload.balChg,
        posBalChg: payload.posBalChg,
        bal: payload.bal,
        posBal: payload.posBal,
        sz: payload.sz,
        px: payload.px,
        ccy: payload.ccy,
        pnl: payload.pnl,
        fee: payload.fee,
        mgnMode: payload.mgnMode,
        instId: payload.instId,
        ordId: payload.ordId,
        execType: payload.execType,
        from: payload.from,
        to: payload.to,
        notes: payload.notes,
    };
  };
  
  module.exports = {
    getBillsArchiveRequest,
    getBillsArchiveResponse,
  };