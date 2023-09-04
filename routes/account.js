const accountController = require("../controller/account");

const router = require("express").Router();

router.post("/account/change-mode", accountController.setAccountMode);

module.exports = router;
