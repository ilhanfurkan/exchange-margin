const mongoose = require("mongoose");
const uuid = require("uuid")

const marketDocumentSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: () => uuid.v4() 
  },
  marketActive: {
    type: Boolean,
  },
  exchangeActive: {
    type: Boolean,
  },
  walletActive: {
    type: Boolean,
  },
  convertActive: {
    type: Boolean,
  },
  instType: {
    type: String,
  },
  instId: {
    type: String,
  },
  instFamily: {
    type: String,
  },
  uly: {
    type: String,
  },
  alias: {
    type: String,
  },
  state: {
    type: String,
  },
  lever: {
    type: String,
  },
  stk: {
    type: String,
  },
  optType: {
    type: String,
  },
  expTime: {
    type: String,
  },
  listTime: {
    type: String,
  },
  baseCcy: {
    type: String,
  },
  quoteCcy: {
    type: String,
  },
  settleCcy: {
    type: String,
  },
  category: {
    type: String,
  },
  ctVal: {
    type: String,
  },
  ctType: {
    type: String,
  },
  ctMult: {
    type: String,
  },
  ctValCcy: {
    type: String,
  },
  tickSz: {
    type: String,
  },
  lotSz: {
    type: String,
  },
  minSz: {
    type: String,
  },
  maxTriggerSz: {
    type: String,
  },
  maxMktSz: {
    type: String,
  },
  maxTwapSz: {
    type: String,
  },
  maxLmtSz: {
    type: String,
  },
  maxStopSz: {
    type: String,
  },
  maxIcebergSz: {
    type: String,
  },
});

module.exports = mongoose.model("MarketDocument", marketDocumentSchema);
