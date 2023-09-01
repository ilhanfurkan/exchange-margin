const mongoose = require("mongoose");
const uuid = require("uuid");

const marginOrderHistoryArchiveDocument = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: () => uuid.v4(),
  },
  instType: {
    type: String,
    },
    tgtCcy: {
    type: String,
    },
    ccy: {
    type: String,
    },
    ordId: {
    type: String,
    },
    clOrdId: {
    type: String,
    },
    tag: {
    type: String,
    },
    px: {
    type: String,
    },
    pxUsd: {
    type: String,
    },
    pxVol: {
    type: String,
    },
    pxType: {
    type: String,
    },
    sz: {
    type: String,
    },
    ordType: {
    type: String,
    },
    side: {
    type: String,
    },
    posSide: {
    type: String,
    },
    tdMode: {
    type: String,
    },
    accFillSz: {
    type: String,
    },
    fillPx: {
    type: String,
    },
    tradeId: {
    type: String,
    },
    fillSz: {
    type: String,
    },
    fillTime: {
    type: String,
    },
    avgPx: {
    type: String,
    },
    state: {
    type: String,
    },
    lever: {
    type: String,
    },
    attachAlgoClOrdId: {
    type: String,
    },
    tpTriggerPx: {
    type: String,
    },
    tpTriggerPxType: {
    type: String,
    },
    tpOrdPx: {
    type: String,
    },
    slTriggerPx: {
    type: String,
    },
    slTriggerPxType: {
    type: String,
    },
    slOrdPx: {
    type: String,
    },
    stpId: {
    type: String,
    },
    stpMode: {
    type: String,
    },
    feeCcy: {
    type: String,
    },
    fee: {
    type: String,
    },
    source: {
    type: String,
    },
    rebateCcy: {
    type: String,
    },
    rebate: {
    type: String,
    },
    pnl: {
    type: String,
    },
    category: {
    type: String,
    },
    reduceOnly: {
    type: String,
    },
    cancelSource: {
    type: String,
    },
    cancelSourceReason: {
    type: String,
    },
    algoId: {
    type: String,
    },
    uTime: {
    type: String,
    },
    cTime: {
    type: String,
    },

 
});

module.exports = mongoose.model(
  "MarginOrderHistoryArchiveDocument",
  marginOrderHistoryArchiveDocument
);
