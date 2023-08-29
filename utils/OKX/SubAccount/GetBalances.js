const getBalancesRequest = (payload) => {
  return {
    subAcct: payload.subAcct,
  };
};

const getBalancesResponse = (payload) => {
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
    details: [
      {
        ccy: payload.details.ccy,
        eq: payload.details.eq,
        cashBal: payload.details.cashBal,
        uTime: payload.details.uTime,
        isoEq: payload.details.isoEq,
        availEq: payload.details.availEq,
        disEq: payload.details.disEq,
        availBal: payload.details.availBal,
        frozenBal: payload.details.frozenBal,
        ordFrozen: payload.details.ordFrozen,
        liab: payload.details.liab,
        upl: payload.details.upl,
        uplLiab: payload.details.uplLiab,
        crossLiab: payload.details.crossLiab,
        isoLiab: payload.details.isoLiab,
        mgnRatio: payload.details.mgnRatio,
        interest: payload.details.interest,
        twap: payload.details.twap,
        maxLoan: payload.details.maxLoan,
        eqUsd: payload.details.eqUsd,
        borrowFroz: payload.details.borrowFroz,
        notionalLever: payload.details.notionalLever,
      },
    ],
  };
};

module.exports = {
    getBalancesRequest,
    getBalancesResponse,
};
