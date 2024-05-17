const mongoose = require('mongoose');

//const uri = 'mongodb://127.0.0.1:27017/hotelsu';
//const uri = 'mongodb://localhost:27017/hotels';
const mongoURL='mongodb+srv://abhisheksinghmuz1999:76jR5N0j3h9zCVbD@cluster0.o9bq1nq.mongodb.net/';
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error(err));
  //vgjhfjkghftk