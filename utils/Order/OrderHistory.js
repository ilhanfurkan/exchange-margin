exports.fillOrderHistoryArchive = (payload) => {
    return {
        _id: payload.ordId,
          instType:payload.instType,
            tgtCcy:payload.tgtCcy,
            ccy: payload.ccy,
            ordId: payload.ordId,
            clOrdId: payload.clOrdId,
            tag: payload.tag,
            px: payload.px,
            pxUsd: payload.pxUsd,
            pxVol: payload.pxVol,
            pxType: payload.pxType,
            sz: payload.sz,
            ordType:payload.ordType,
            side: payload.side,
            posSide:payload.posSide,
            tdMode: payload.tdMode,
            accFillSz: payload.accFillSz,
            fillPx:  payload.fillPx, 
            tradeId:  payload.tradeId,
            fillSz:  payload.fillSz,
            fillTime:  payload.fillTime,
            avgPx:    payload.avgPx,
            state:  payload.state,
            lever:  payload.lever,
            attachAlgoClOrdId: payload.attachAlgoClOrdId,
            tpTriggerPx: payload.tpTriggerPx,
            tpTriggerPxType: payload.tpTriggerPxType,
            tpOrdPx: payload.tpOrdPx,
            slTriggerPx: payload.slTriggerPx,
            slTriggerPxType:payload.slTriggerPxType,
            slOrdPx: payload.slOrdPx,
            stpId: payload.stpId,
            stpMode: payload.stpMode,
            feeCcy: payload.feeCcy,
            fee: payload.fee,
            source: payload.source,
            rebateCcy: payload.rebateCcy,
            rebate: payload.rebate,
            pnl: payload.pnl,
            category: payload.category,
            reduceOnly: payload.reduceOnly,
            cancelSource: payload.cancelSource,
            cancelSourceReason: payload.cancelSourceReason,
            algoId: payload.algoId,
            uTime: payload.uTime,
            cTime: payload.cTime,
        
    };
  };
  