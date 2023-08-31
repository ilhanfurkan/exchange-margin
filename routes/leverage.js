const leverageController = require("../controller/leverage");

const router = require("express").Router();

router.get("/fill/leverage", leverageController.setLeverage);

module.exports = router;