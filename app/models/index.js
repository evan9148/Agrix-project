const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.farmMachine = require("./farm-machine")(mongoose);
db.cluster = require("./cluster")(mongoose);
db.farmer = require("./farmer")(mongoose);
db.plot = require("./plot-details")(mongoose);
db.driver = require("./driver")(mongoose);
db.state = require("./state")(mongoose);
db.district=require("./district")(mongoose)
db.ownerType=require('./owner-type')(mongoose)
db.farmSeason=require('./farm-season')(mongoose);
db.cropType=require('./crop-type')(mongoose);
db.cropSubType=require('./crop-sub-type')(mongoose);
db.variety=require('./variety')(mongoose);
db.user=require('./user')(mongoose);
db.role=require('./role')(mongoose);

db.ROLES=['admin'];
module.exports = db;