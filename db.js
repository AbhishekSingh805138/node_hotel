const mongoose = require('mongoose');
require("dotenv").config();
//const mongourl=process.env.mongodb_URL_local;
const mongourl=process.env.mongodb_URL;

//const uri = 'mongodb://127.0.0.1:27017/hotelsu';
//const uri = 'mongodb://localhost:27017/hotels';
const uri='mongodb+srv://abhisheksinghmuz1999:Kishan8051@cluster0.o9bq1nq.mongodb.net/';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error(err));
  //vgjhfjkghftk