require('dotenv').config();
console.log(process.env.DATABASE);
let mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);