const mongoose = require("mongoose");
const uuid = require("uuid");

const marginPositionHistorySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: () => uuid.v4(),
  },
  instType: {
    type: String,
  },
  instId: {
    type: String,
  },
  mgnMode: {
    type: String,
  },
  type: {
    type: String,
  },
  cTime: {
    type: String,
  },
  uTime: {
    type: String,
  },
  openAvgPx: {
    type: String,
  },
  closeAvgPx: {
    type: String,
  },
  posId: {
    type: String,
  },
  openMaxPos: {
    type: String,
  },
  closeTotalPos: {
    type: String,
  },
  realizedPnl: {
    type: String,
  },
  fee: {
    type: String,
  },
  fundingFee: {
    type: String,
  },
  liqPenalty: {
    type: String,
  },
  pnl: {
    type: String,
  },
  pnlRatio: {
    type: String,
  },
  lever: {
    type: String,
  },
  direction: {
    type: String,
  },
  triggerPx: {
    type: String,
  },
  uly: {
    type: String,
  },
  ccy: {
    type: String,
  },
});

module.exports = mongoose.model(
  "MarginPositionHistoryDocument",
  marginPositionHistorySchema
);
