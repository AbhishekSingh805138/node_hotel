const mongoose = require('mongoose');

//create schema or model
const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['Chef', 'waiter', 'manager',"nak"],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
   
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
})


//now from above schema create person model
const Person = mongoose.model('Person', personschema);
module.exports = Person;