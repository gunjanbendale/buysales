var express = require('express');
var router = express.Router();

var control = require('../models/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert',control.insert);

router.get('/getd',control.showe);

router.post('/placeauction',control.placeinauction);


module.exports = router;
