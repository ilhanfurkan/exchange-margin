const express = require('express');
const router = express.Router();

const coinGeckoController = require('../controller/coin_gecko');

router.get('/pairs', coinGeckoController.getPairs);

module.exports = router;