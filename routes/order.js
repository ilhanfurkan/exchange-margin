const orderController = require("../controller/order");

const router = require("express").Router();

router.get("/order/order-history-archive", orderController.getOrderHistory);
router.post("/fill/order/placeOrder", orderController.postPlaceOrder);
router.get('/order/openOrders', orderController.getOpenOrder)
router.post('/order/cancelOrder', orderController.postCancelOrder)
module.exports = router;
 