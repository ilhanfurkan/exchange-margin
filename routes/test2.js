const express = require("express");
const router = express.Router();

const coinGeckoController = require("../controller/test2");

router.get("/pairs", coinGeckoController.getPairs);

module.exports = router;
