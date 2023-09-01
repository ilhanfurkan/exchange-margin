const marketDocument = require("../../models/marketDocument");
const { fillMarketRequest } = require("../../utils/Market/FillMarketRequest");
const marginOrderHistoryDocument = require("../../models/marginOrderHistoryDocument");

const MarginOrderHistoryArchiveDocument = require("../../models/MarginOrderHistoryArchiveDocument");
const { fillOrderHistoryArchive } = require("../../utils/Order/OrderHistory");
const marginOrderRequestDocument = require("../../models/marginOrderRequestDocument");
const { OrderRequest } = require("../../utils/Order/OrderRequest");

exports.placeOrders = async (request, response) => {
  if (!response?.status) {
    await new marginOrderRequestDocument(
      OrderRequest(request, response)
    ).save();
    return await marginOrderRequestDocument.find({}).exec();
  } else {
    return await response.message;
  }
};

exports.fillOrderRequest = async (items) => {
  items.forEach(async (item) => {
    const coinCheck = await marketDocument.find({
      _id: item.instType + ":" + item.instId,
    });
    if (!coinCheck) {
      await new marketDocument(fillMarketRequest(item)).save();
    }
  });
  return await marketDocument.find({}).exec();
};

exports.fillOrderHistoryArchive = async (items) => {
  items.forEach(async (item) => {
    const historyCheck = await MarginOrderHistoryArchiveDocument.find({
      _id: item.ordId,
    });
    if (!historyCheck) {
      await new MarginOrderHistoryArchiveDocument(
        fillOrderHistoryArchive(item)
      ).save();
    }
  });

  return await MarginOrderHistoryArchiveDocument.find({}).exec();
};
exports.fillOrderHistory = async (items) => {
  items.forEach(async (item) => {
    const coinCheck = await marketDocument.find({
      _id: item.instType + ":" + item.instId,
    });
    if (!coinCheck) {
      await new marketDocument(fillMarketRequest(item)).save();
    }
  });
  return await marketDocument.find({}).exec();
};

exports.getOpenOrders = async (items) => {
   
  return await  items;
}
