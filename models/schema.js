var mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect("mongodb://abcd:abcd1234@ds047666.mlab.com:47666/test123",{useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("db connected");
});

// let emailSchema = new Schema({
    // email: String
  // })
// let nameSchema = new Schema({
    // name: String
  // })

let equipSchema = new Schema({
  userid: mongoose.Schema.Types.ObjectId,
  equipment : {
    equipid : mongoose.Schema.Types.ObjectId,
    category : String,
    subcat :String,
    manufacturer : String,
    make : String,
    year : Number,
    condn : String,
    auctionorsell : Number,
    price : { 
      auctionprice : String, 
      sellnowprice : String,
    },
    status : [String]
  }

});

let placeauction = new Schema({
  userid : mongoose.Schema.Types.ObjectId,
  equipid : mongoose.Schema.Types.ObjectId,
  auctionid : Number,
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
});

// var email=mongoose.model('Email', emailSchema);
// var name=mongoose.model('name', nameSchema);

var createequip = mongoose.model('equipments',equipSchema);
var placeauc = mongoose.model('auctionreq', placeauction);
var buyn = mongoose.model('buynow',buynow);
var auction = mongoose.model('auctionschema',auctionSchema);

module.exports = { createequip,placeauc,buyn,auction};