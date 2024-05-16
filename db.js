const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/hotelsu';
//const uri = 'mongodb://localhost:27017/hotels';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error(err));