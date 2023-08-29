const {testController} = require('../controller/test');

const router = require('express').Router();

router.post('/test', testController);

module.exports = router;