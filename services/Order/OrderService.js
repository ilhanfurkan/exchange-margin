const marketDocument = require("../../models/marketDocument");
const { fillMarketRequest } = require("../../utils/Market/FillMarketRequest");


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