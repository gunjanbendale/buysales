var mongoose = require('mongoose');
var schema= require('./schema');

module.exports={
scheduleAuction: function(req,res){
  let auc = new schema.auction(req.body);
	
	auc.save()
		.then(doc => { console.log(doc);
			res.send("Auction created" + req.id); })
  	.catch(err => { console.error(err) });
  },

};