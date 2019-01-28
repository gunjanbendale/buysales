var mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect("mongodb://abcd:abcd1234@ds047666.mlab.com:47666/test123",{useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("db connected");
});

let equipSchema = new Schema({
  userid: mongoose.Schema.Types.ObjectId,
  equipment : {
    equipid : mongoose.Schema.Types.ObjectId,
    userid: mongoose.Schema.Types.ObjectId ,
    category : String,
    subcat :String,
    manufacturer : String,
    make : String,
    year : Number,
    condn : String,
    auctionorsell : Number,
    price : { 
      base_bid : String, 
      sellnowprice : String,
    },
    status : [String],
    auctionid: String,
  }

});

let buynow = new Schema({
  equipid : mongoose.Schema.Types.ObjectId,
  offerprice : String,
  chatid : mongoose.Schema.Types.ObjectId,

});

let auctionSchema = new Schema({
  brief: String,
  datetime:{
      from: Date,
      to:Date,
  },
  image: String,
  equip:[{
    equipid: mongoose.Schema.Types.ObjectId ,
    userid: String,
    max_bid: Number,
  }],
});

// var placeauc = mongoose.model('auctionreq', placeauction);
var createequip = mongoose.model('equipments',equipSchema);
var buyn = mongoose.model('buynow',buynow);

//auction
var auction = mongoose.model('auctions',auctionSchema);

module.exports = { createequip,buyn,auction};