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

	showequip: function(req,res){
		schema.createequip.find({_id:req.params.id},function(err,docs){
			if(err||!docs){
				console.log(err);
			}
			else{
			res.json(docs);
			console.log(docs);
			}
		});
	},
	placeinAuction : function(req,res){
		schema.auction.updateOne({_id:req.body.aucid}, {$push: { equip: req.body }}, function (err, result) {
			if (err) return handleError(err);
      schema.createequip.updateOne({_id: req.body.equipid },{ "equipment.auctionid": req.body.aucid },function(err,resul){
        if(err) return handleError(err);
        console.log("euip updated!" );
      });
			res.send(result);
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