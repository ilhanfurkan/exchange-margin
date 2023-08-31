const { get } = require("express/lib/response");
const {
  newGetRequest,
  newPostRequest,
} = require("../../../helpers/okxRequest");

const {
  getAccountPositionRiskRequest,
  getAccountPositionRiskResponse,
} = require("../../../utils/OKX/TradingAccount/GetAccountPositionRisk");
const {
  getAdjustLeverageInfoRequest,
  getAdjustLeverageInfoResponse,
} = require("../../../utils/OKX/TradingAccount/GetAdjustLeverageInfo");
const {
  getBalanceRequest,
  getBalanceResponse,
} = require("../../../utils/OKX/TradingAccount/GetBalance");
const {
  getBillsRequest,
  getBillsResponse,
} = require("../../../utils/OKX/TradingAccount/GetBills");
const {
  getBillsArchiveRequest,
  getBillsArchiveResponse,
} = require("../../../utils/OKX/TradingAccount/GetBillsArchive");

const {
  getBorrowRepayHistoryRequest,
  getBorrowRepayHistoryResponse,
} = require("../../../utils/OKX/TradingAccount/GetBorrowRepayHistory");
const {
  getConfigRequest,
  getConfigResponse,
} = require("../../../utils/OKX/TradingAccount/GetConfig");
// const {
//   getInterestAccruedRequest,
//   getInterestAccruedResponse,
// } = require("../../../utils/OKX/TradingAccount/GetInterestedAccrued");
// const {
//   getInterestLimitsRequest,
//   getInterestLimitsResponse,
// } = require("../../../utils/OKX/TradingAccount/GetInterestLimit");
const {
  getInterestRateRequest,
  getInterestRateResponse,
} = require("../../../utils/OKX/TradingAccount/GetInterestRate");
const {
  getLeverageInfoRequest,
  getLeverageInfoResponse,
} = require("../../../utils/OKX/TradingAccount/GetLeverageInfo");
const {
  getMaxAvailSizeRequest,
  getMaxAvailSizeResponse,
} = require("../../../utils/OKX/TradingAccount/GetMaxAvailSize");
const {
  getMaxLoanRequest,
  getMaxLoanResponse,
} = require("../../../utils/OKX/TradingAccount/GetMaxLoan");
const {
  getMaxSizeRequest,
  getMaxSizeResponse,
} = require("../../../utils/OKX/TradingAccount/GetMaxSize");
// const {
//   getMMPConfigRequest,
//   getMMPConfigResponse,
// } = require("../../../utils/OKX/TradingAccount/GetMMPConfig");
const {
  getPositionsRequest,
  getPositionsResponse,
} = require("../../../utils/OKX/TradingAccount/GetPosition");
const {
  getPositionHistoryRequest,
  getPositionHistoryResponse,
} = require("../../../utils/OKX/TradingAccount/GetPositionHistory");
const {
  getQuickMarginBorrowRepayHistoryRequest,
  getQuickMarginBorrowRepayHistoryResponse,
} = require("../../../utils/OKX/TradingAccount/GetQuickMarginBorrowRepayHistory");

const {
  getRiskStateRequest,
  getRiskStateResponse,
} = require("../../../utils/OKX/TradingAccount/GetRiskState");
const {
  getTradeFeeRequest,
  getTradeFeeResponse,
} = require("../../../utils/OKX/TradingAccount/GetTradeFee");
const {
  getVipInterestAccruedRequest,
  getVipInterestAccruedResponse,
} = require("../../../utils/OKX/TradingAccount/GetVipInterestAccrued");
const {
  getVipInterestDeductedRequest,
  getVipInterestDeductedResponse,
} = require("../../../utils/OKX/TradingAccount/GetVipInterestDeducted");
const {
  getVipLoanOrderDetailRequest,
  getVipLoanOrderDetailResponse,
} = require("../../../utils/OKX/TradingAccount/GetVipLoanOrderDetail");
const {
  getVipLoanOrderListRequest,
  getVipLoanOrderListResponse,
} = require("../../../utils/OKX/TradingAccount/GetVipLoanOrderList");
const {
  postBorrowRepayRequest,
  postBorrowRepayResponse,
} = require("../../../utils/OKX/TradingAccount/PostBorrowRepay");
const {
  postMMPConfigRequest,
  postMMPConfigResponse,
} = require("../../../utils/OKX/TradingAccount/PostMMPConfig");
const {
  postMMPResetRequest,
  postMMPResetResponse,
} = require("../../../utils/OKX/TradingAccount/PostMMPReset");
const {
  postPositionMarginBalanceRequest,
  postPositionMarginBalanceResponse,
} = require("../../../utils/OKX/TradingAccount/PostPositionMarginBalance");
const {
  postQuickMarginBorrowRepayRequest,
  postQuickMarginBorrowRepayResponse,
} = require("../../../utils/OKX/TradingAccount/PostQuickMarginBorrowRepay");
const {
  postSetAutoLoanRequest,
  postSetAutoLoanResponse,
} = require("../../../utils/OKX/TradingAccount/PostSetAutoLoan");
const {
  postSetIsolatedModeRequest,
  postSetIsolatedModeResponse,
} = require("../../../utils/OKX/TradingAccount/PostSetIsolatedMode");
const {
  postSetLeverageRequest,
  postSetLeverageResponse,
} = require("../../../utils/OKX/TradingAccount/PostSetLeverage");
const {
  postSetPositionRequest,
  postSetPositionResponse,
} = require("../../../utils/OKX/TradingAccount/PostSetPositionMode");
const {
  postSetRiskOffsetTypeRequest,
  postSetRiskOffsetTypeResponse,
} = require("../../../utils/OKX/TradingAccount/PostSetRiskOffsetType");
const {
  postSimulatedMarginRequest,
  postSimulatedMarginResponse,
} = require("../../../utils/OKX/TradingAccount/PostSimulatedMargin");

const {
  postSetAccountLevelRequest,
  postSetAccountLevelResponse,
} = require("../../../utils/OKX/TradingAccount/PostSetAccountLevel");

exports.getAccountPositionRisk = async (body) => {
  return await newGetRequest(
    getAccountPositionRiskRequest,
    getAccountPositionRiskResponse,
    "account/account-position-risk",
    body
  );
};

exports.getAdjustLeverageInfo = async (body) => {
  return await newGetRequest(
    getAdjustLeverageInfoRequest,
    getAdjustLeverageInfoResponse,
    "account/adjust-leverage-info",
    body
  );
};

exports.getBalance = async (body) => {
  return await newGetRequest(
    getBalanceRequest,
    getBalanceResponse,
    "account/balance",
    body
  );
};

exports.getBills = async (body) => {
  return await newGetRequest(
    getBillsRequest,
    getBillsResponse,
    "account/bills",
    body
  );
};

exports.getBillsArchive = async (body) => {
  return await newGetRequest(
    getBillsArchiveRequest,
    getBillsArchiveResponse,
    "account/bills-archive",
    body
  );
};
exports.getBillsArchive = async (body) => {
  return await newGetRequest(
    getBillsArchiveRequest,
    getBillsArchiveResponse,
    "account/bills-archive",
    body
  );
};

exports.getBorrowRepayHistory = async (body) => {
  return await newGetRequest(
    getBorrowRepayHistoryRequest,
    getBorrowRepayHistoryResponse,
    "account/borrow-repay-history",
    body
  );
};

exports.getConfig = async (body) => {
  return await newGetRequest(
    getConfigRequest,
    getConfigResponse,
    "account/config",
    body
  );
};
exports.getInterestedAccrued = async (body) => {
  return await newGetRequest(
    getInterestAccruedRequest,
    getInterestAccruedResponse,
    "account/interest-accrued",
    body
  );
};

exports.getInterestLimits = async (body) => {
  return await newGetRequest(
    getInterestLimitsRequest,
    getInterestLimitsResponse,
    "account/interest-limit",
    body
  );
};

exports.getInterestRate = async (body) => {
  return await newGetRequest(
    getInterestRateRequest,
    getInterestRateResponse,
    "account/interest-rate",
    body
  );
};

exports.getLeverageInfo = async (body) => {
  return await newGetRequest(
    getLeverageInfoRequest,
    getLeverageInfoResponse,
    "account/leverage-info",
    body
  );
};

exports.getMaxAvailSize = async (body) => {
  return await newGetRequest(
    getMaxAvailSizeRequest,
    getMaxAvailSizeResponse,
    "account/max-avail-size",
    body
  );
};

exports.getMaxLoan = async (body) => {
  return await newGetRequest(
    getMaxLoanRequest,
    getMaxLoanResponse,
    "account/max-loan",
    body
  );
};

exports.getMaxSize = async (body) => {
  return await newGetRequest(
    getMaxSizeRequest,
    getMaxSizeResponse,
    "account/max-size",
    body
  );
};

exports.getMMPConfig = async (body) => {
  return await newGetRequest(
    getMMPConfigRequest,
    getMMPConfigResponse,
    "account/mmp-config",
    body
  );
};

exports.getPositions = async (body) => {
  return await newGetRequest(
    getPositionsRequest,
    getPositionsResponse,
    "account/positions",
    body
  );
};

exports.getPositionsHistory = async (body) => {
  return await newGetRequest(
    getPositionHistoryRequest,
    getPositionHistoryResponse,
    "account/positions-history",
    body
  );
};

exports.getQuickMarginBorrowRepayHistoryRequest = async (body) => {
  return await newGetRequest(
    getQuickMarginBorrowRepayHistoryRequest,
    getQuickMarginBorrowRepayHistoryResponse,
    "account/quick-margin-borrow-repay-history",
    body
  );
};

exports.getRiskState = async (body) => {
  return await newGetRequest(
    getRiskStateRequest,
    getRiskStateResponse,
    "account/risk-state",
    body
  );
};
exports.getTradeFee = async (body) => {
  return await newGetRequest(
    getTradeFeeRequest,
    getTradeFeeResponse,
    "account/trade-fee",
    body
  );
};
exports.getVipInterestAccrued = async (body) => {
  return await newGetRequest(
    getVipInterestAccruedRequest,
    getVipInterestAccruedResponse,
    "account/vip-interest-accrued",
    body
  );
};
exports.getVipInterestDeducted = async (body) => {
  return await newGetRequest(
    getVipInterestDeductedRequest,
    getVipInterestDeductedResponse,
    "account/vip-interest-deducted",
    body
  );
};
exports.getVipLoanOrderDetail = async (body) => {
  return await newGetRequest(
    getVipLoanOrderDetailRequest,
    getVipLoanOrderDetailResponse,
    "account/vip-loan-order-detail",
    body
  );
};
exports.getVipLoanOrderList = async (body) => {
  return await newGetRequest(
    getVipLoanOrderListRequest,
    getVipLoanOrderListResponse,
    "account/vip-loan-order-list",
    body
  );
};
exports.postBorrowRepay = async (body) => {
  return await newPostRequest(
    postBorrowRepayRequest,
    postBorrowRepayResponse,
    "account/borrow-repay",
    body
  );
};
exports.postMMPConfig = async (body) => {
  return await newPostRequest(
    postMMPConfigRequest,
    postMMPConfigResponse,
    "account/mmp-config",
    body
  );
};
exports.postMMPReset = async (body) => {
  return await newPostRequest(
    postMMPResetRequest,
    postMMPResetResponse,
    "account/mmp-reset",
    body
  );
};
exports.postPositionMarginBalance = async (body) => {
  return await newPostRequest(
    postPositionMarginBalanceRequest,
    postPositionMarginBalanceResponse,
    "account/position/margin-balance",
    body
  );
};
exports.postQuickMarginBorrowRepay = async (body) => {
  return await newPostRequest(
    postQuickMarginBorrowRepayRequest,
    postQuickMarginBorrowRepayResponse,
    "account/quick-margin-borrow-repay",
    body
  );
};
exports.postSetAutoLoan = async (body) => {
  return await newPostRequest(
    postSetAutoLoanRequest,
    postSetAutoLoanResponse,
    "account/set-auto-loan",
    body
  );
};
exports.postSetIsolatedMode = async (body) => {
  return await newPostRequest(
    postSetIsolatedModeRequest,
    postSetIsolatedModeResponse,
    "account/set-isolated-mode",
    body
  );
};
exports.postSetLeverage = async (body) => {
  return await newPostRequest(
    postSetLeverageRequest,
    postSetLeverageResponse,
    "account/set-leverage",
    body
  );
};
exports.postSetPositionMode = async (body) => {
  return await newPostRequest(
    postSetPositionRequest,
    postSetPositionResponse,
    "account/set-position-mode",
    body
  );
};
exports.postSetRiskOffsetType = async (body) => {
  return await newPostRequest(
    postSetRiskOffsetTypeRequest,
    postSetRiskOffsetTypeResponse,
    "account/set-riskOffset-type",
    body
  );
};
exports.postSimulatedMargin = async (body) => {
  return await newPostRequest(
    postSimulatedMarginRequest,
    postSimulatedMarginResponse,
    "account/simulated_margin",
    body
  );
};

exports.postSetAccountLevel = async (body) => {

  return await newPostRequest(
    postSetAccountLevelRequest,
    postSetAccountLevelResponse,
    "account/set-account-level",
    body
  );
};
