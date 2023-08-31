const orderController = require("../controller/order");

const router = require("express").Router();

router.get("/fill/order", orderController.getOrderHistory);
router.get("/fill/order/placeOrder", orderController.placeOrder);

module.exports = router;
