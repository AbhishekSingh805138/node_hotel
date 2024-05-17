const express = require('express')
const app = express()
const db=require("./db");
require("dotenv").config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
 //all data convert to object and store to req.body

const port=process.env.PORT||8008;

const Person=require('./models/person');
app.get("/",function(req,res){
  res.send("welcome to my hotel")
})

app.post("/person",async(req,res)=>{
  try{
    const data = req.body  //Assuming the request body contains the person data

    //Create a new Person document usingthe mongoose model
    const newPerson = new Person(data);

    //save newPerson to database
    const response=await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  }
catch(err){
  console.log(err);
  res.status(500).json({error:"internet server error"});
}
})
//get method to get the person
app.get('/person',async(req,res)=>{
  try{
    const data=await Person.find();
    console.log("data fetghed");
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error:"internet error"});
  }
})


app.get('/person/:workType',async(req,res)=>{
  try{
    const workType=req.params.workType;
    if (workType== "Chef"|| workType=="manager"||workType=="waiter"){
      const response=await Person.find({work:workType});
      console.log("response fetchted");
      res.status(200).json({response});



  }else{
      res.status(404).json({error:"invalid work type"});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:"internet server error"});


  }
 

  
})
//impport the router files
const personRoutes=require('./routes/personRoutes');
//use the router
app.use("/person",personRoutes);  




app.listen(PORT, () => {
    console.log('Server is running on port');
});
