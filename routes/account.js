const accountController = require("../controller/account");

const router = require("express").Router();

router.post("/account/change-level", accountController.setAccountMode);

module.exports = router;
