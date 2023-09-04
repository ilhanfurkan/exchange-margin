const mongoose = require("mongoose");
const uuid = require("uuid");
const tradeStatusEnum = [
  "IS_OPEN",
  "FINISHED",
  "CANCELLED_BY_USER",
  "CANCELLED_BY_ADMIN",
  "EXPIRED",
  "WAITING",
  "FINISHED_WITHOUT_TRANSACTION",
];

const marginOrderResponseDocument = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      default: () => uuid.v4(),
    },
    ordId: {
      type: String,
    },
    clOrdIdRes: {
      nullable: false,
      type: String,
    },
    tagRes: {
      nullable: false,
      type: String,
    },
    sCode: {
      type: String,
    },
    sMsg: {
      type: String,
    },
    tradeStatus: {
      nullable: false,
      type: String,
      enum: tradeStatusEnum,
      defaultValue: "IS_OPEN",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "OrderResponseDocument",
  marginOrderResponseDocument
);
