var mongoose = require('mongoose');
var schema= require('./schema');

module.exports={
	insert: function(req,res){

	let equip = new schema.createequip(req.body);	

	 equip.save()
	  .then(doc => {
			res.send("inserted");
			console.log(doc);
		})
		.catch(err => {
			console.log(err)
		});
	},
	showe : function(req,res){

		schema.createequip.find({userid:req.body.userid},function(err,docs){
			if(err||!docs){
				console.log(err);
			}
			else{
			res.json(docs);
			console.log(docs);
			}
		});

	},
	placeinauction : function(req,res){
		let det = new schema.placeauc(req.body);
		
		det.save()
		.then(doc =>{
			res.send("request submitted");
			console.log(doc);
		})
		.catch(err =>{
			console.log(err)
		});
	},
	upcomingAuction: function(req,res){
		var dt= new Date();
		schema.auction.find( {"datetime.from" : { $gt:dt } }, function(err,docs){
		  if(err){
			console.log(err);
		  }
		  else
			res.json(docs);
		});
		},
	  
	liveAuction: function(req,res){
		  var dt= new Date();
		  schema.auction.find( {"datetime.from" : { $lt:dt } }, function(err,docs){
			if(err){ console.log(err); }
			else
			  res.json(docs);
		  });
		},
};