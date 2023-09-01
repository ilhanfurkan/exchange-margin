const orderController = require("../controller/order");

const router = require("express").Router();

router.get("/fill/order", orderController.getOrderHistory);
router.get("/order/order-history-archive", orderController.getOrderHistory);
router.post("/fill/order/placeOrder", orderController.postPlaceOrder);

module.exports = router;
