const positionController = require("../controller/position");

const router = require("express").Router();

router.get("/fill/position", positionController.getPosition);

module.exports = router;
