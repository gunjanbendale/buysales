var express = require('express');
var router = express.Router();
var control1=require('../models/admincontrol');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/scheduleAuction',control1.scheduleAuction);

module.exports = router;
