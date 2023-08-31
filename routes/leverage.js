const leverageController = require("../controller/leverage");

const router = require("express").Router();

router.post("/fill/leverage", leverageController.setLeverage);

module.exports = router;