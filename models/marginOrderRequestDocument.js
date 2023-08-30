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
const tradeStatusEnum = [
  "IS_OPEN",
  "FINISHED",
  "CANCELLED_BY_USER",
  "CANCELLED_BY_ADMIN",
  "EXPIRED",
  "WAITING",
  "FINISHED_WITHOUT_TRANSACTION",
];

const marginOrderRequestDocument = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      default: () => uuid.v4(),
    },
    customerId: {
      nullable: false,
      type: Number,
    },
    marketName: {
      nullable: false,
      type: String,
    },
    instID: {
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
    clOrdID: {
      nullable: false,
      type: String,
    },
    tag: {
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
    },
    sCode: {
      type: String,
    },
    sMsg: {
      type: String,
    },
    tradeType: {
      type: String,
    },
    tradeStatus: {
      nullable: false,
      type: String,
      enum: tradeStatusEnum,
      defaultValue: "IS_OPEN",
    },
    expiresAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "MarginOrderRequestDocument",
  marginOrderRequestDocument
);
