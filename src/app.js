const express=require("express");
const app=express();
const dns=require("dns");
dns.setServers(["1.1.1.1","8.8.8.8"]);
const connectDB=require("./config/database");
const User=require("./model/user");
app.use(express.json());
app.post("/signup",async (req,res)=>{
    const user=new User(req.body);
    try{
    await user.save();
    res.send("Data has been succesfully saved");}
    catch(err){
        res.status(400).send("Bad Request");
    }
})
connectDB().then(()=>{
    console.log("DataBase Connection Established");
    
port=7000;
app.listen(port,()=>{
    console.log(" I am Up Saurav Kumar")
});
})
.catch((err)=>{
    console.log("DataBase Connection has lost",err.message)
});

