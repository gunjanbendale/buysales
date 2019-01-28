var express = require('express');
var router = express.Router();

var control = require('../models/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/insert',control.insert); //create equip
router.get('/equip/:id',control.showequip); //show equip details
router.post('/placeauction',control.placeinAuction); //place a equip in auction
router.get('/liveAuction',control.liveAuction); // see live auctions
router.get('/upcomingAuction',control.upcomingAuction); // see upcoming auctions

module.exports = router;
