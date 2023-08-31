const fillController = require("../controller/fill");

const router = require("express").Router();

router.get("/fill/market", fillController.fillMarket);

module.exports = router;