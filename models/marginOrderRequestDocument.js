const mongoose = require("mongoose");
const uuid = require("uuid");

const tradeModeEnum = ["cross", "isolated", "cash"];
const tradeSideEnum = ["buy", "sell"];
const tradeOrderTypeEnum = [
  "limit",
  "market",
  "post_only",
  "fok",
  "ioc",
  "optimal_limit_ioc",
  "conditional",
];
const triggerPriceTypeEnum = ["last", "index", "mark"];
const quickMarginTypeEnum = ["manual", "auto_borrow", "auto_repay"];

const marginOrderRequestDocument = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      default: () => uuid.v4(),
    },
    instId: {
      nullable: false,
      type: String,
    },
    tdMode: {
      type: String,
      enum: tradeModeEnum,
    },
    ccy: {
      type: String,
    },
    tgtCcy: {
      type: String,
    },
    clOrdIdReq: {
      nullable: false,
      type: String,
    },
    tagReq: {
      nullable: false,
      type: String,
    },
    side: {
      type: String,
      enum: tradeSideEnum,
    },
    posSide: {
      type: String,
    },
    ordType: {
      type: String,
      enum: tradeOrderTypeEnum,
    },
    sz: {
      type: String,
    },
    px: {
      type: String,
    },
    reduceOnly: {
      type: Boolean,
    },
    banAmend: {
      type: String,
    },
    tpTriggerPx: {
      type: String,
    },
    tpOrdPx: {
      type: String,
    },
    slTriggerPx: {
      type: String,
    },
    slOrdPx: {
      type: String,
    },
    tpTriggerPxType: {
      type: String,
      enum: triggerPriceTypeEnum,
    },
    slTriggerPxType: {
      type: String,
      enum: triggerPriceTypeEnum,
    },
    quickMgnType: {
      type: String,
      enum: quickMarginTypeEnum,
    },
    ordId: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "OrderRequestDocument",
  marginOrderRequestDocument
);
