const marketDocument = require("../../models/marketDocument");
const { fillMarketRequest } = require("../../utils/Market/FillMarketRequest");
const marginOrderHistoryDocument = require("../../models/marginOrderHistoryDocument");

const MarginOrderHistoryArchiveDocument = require("../../models/MarginOrderHistoryArchiveDocument");
const {fillOrderHistoryArchive} = require("../../utils/Order/OrderHistory");
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
    // const coinCheck = await MarginOrderHistoryArchiveDocument.find({
    //   _id: item.ordId,
      await new MarginOrderHistoryArchiveDocument(fillOrderHistoryArchive(item)).save();
    });
 
  return await MarginOrderHistoryArchiveDocument.find({}).exec();
};