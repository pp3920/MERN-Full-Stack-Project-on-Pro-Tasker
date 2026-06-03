const mongoose = require('mongoose');
require('dotenv').config();
 
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI);
 
module.exports = mongoose.connection;
