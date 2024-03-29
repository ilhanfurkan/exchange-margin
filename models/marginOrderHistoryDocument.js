const mongoose = require("mongoose");
const uuid = require("uuid");

const marginOrderHistoryDocument = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: () => uuid.v4(),
  },
  subAccount: {
    type: String,
  },
  customerId: {
    type: Number,
  },
  instType: {
    type: String,
  },
  instId: {
    type: String,
  },
  tradeId: {
    type: String,
  },
  clOrdId: {
    type: String,
  },
  billId: {
    type: String,
  },
  tag: {
    type: String,
  },
  fillPx: {
    type: String,
  },
  fillSz: {
    type: String,
  },
  fillIdxPx: {
    type: String,
  },
  fillPnl: {
    type: String,
  },
  side: {
    type: String,
  },
  posSide: {
    type: String,
  },
  execType: {
    type: String,
  },
  feeCcy: {
    type: String,
  },
  fee: {
    type: String,
  },
  ts: {
    type: String,
  },
  orderCreatedAt: {
    type: Date,
  },
  fillTime: {
    type: String,
  },
  feeRate: {
    type: String,
  },
});

module.exports = mongoose.model(
  "MarginOrderHistoryDocument",
  marginOrderHistoryDocument
);
