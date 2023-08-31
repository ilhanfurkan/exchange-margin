const accountController = require("../controller/account");

const router = require("express").Router();

router.post("/fill/account", accountController.setAccountMode);

module.exports = router;