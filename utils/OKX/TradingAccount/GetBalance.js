const getBalanceRequest = (payload) => {
    return {
      ccy: payload.ccy,
    };
  };
  
  const getBalanceResponse = (payload) => {
    return {
      uTime: payload.uTime,
      totalEq: payload.totalEq,
      isoEq: payload.isoEq,
      adjEq: payload.adjEq,
      ordFroz: payload.ordFroz,
      imr: payload.imr,
      mmr: payload.mmr,
      borrowFroz: payload.borrowFroz,
      mgnRatio: payload.mgnRatio,
      notionalUsd: payload.notionalUsd,
      details: [{
        ccy: payload.details.ccy,
        eq: payload.details.eq,
        cashBal: payload.details.cashBal,
        uTime: payload.details.uTime,
        isoEq: payload.details.isoEq,
        availEq: payload.details.availEq,
        disEq: payload.details.disEq,
        fixedBal: payload.details.fixedBal,
        availBal: payload.details.availBal,
        frozenBal: payload.details.frozenBal,
        ordFrozen: payload.details.ordFrozen,
        liab: payload.details.liab,
        upl: payload.details.upl,
        uplLiab: payload.details.uplLiab,
        isoLiab: payload.details.isoLiab,
        mgnRatio: payload.details.mgnRatio,
        interest: payload.details.interest,
        twap: payload.details.twap,
        maxLoan: payload.details.maxLoan,
        eqUsd: payload.details.eqUsd,
        borrowFroz: payload.details.borrowFroz,
        notionalLever: payload.details.notionalLever,
        stgyEq: payload.details.stgyEq,
        isoUpl: payload.details.isoUpl,
        spotInUseAmt: payload.details.spotInUseAmt,
      }]
     
    };
  };
  
  module.exports = {
    getBalanceRequest,
    getBalanceResponse,
  };