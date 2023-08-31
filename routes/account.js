const accountController = require("../controller/account");

const router = require("express").Router();

router.get("/fill/account", accountController.setAccountMode);

module.exports = router;