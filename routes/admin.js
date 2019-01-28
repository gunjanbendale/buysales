var express = require('express');
var router = express.Router();
var control1=require('../models/admincontrol');
var app= express();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/scheduleAuction',auth,control1.scheduleAuction);
function auth(req,res,next){
  req.id="asdsa";
  console.log("innn");
  next();
};

module.exports = router;
