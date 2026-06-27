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
        if (err.code === 11000) {
            return res.status(400).send("Registration failed: That email address is already in use.");
        }

        // Handle other validation errors (like short names or missing passwords)
        res.status(400).send("Validation error: " + err.message);
    }
});
app.get("/feed", async (req,res)=>{
    try{
     const users=await User.find({});
     res.send(users);
    }
    catch(err){
        res.status(404).send("User Not Found");
    }
});
app.get("/user",async (req,res)=>{
    const userEmail=req.body.emailid;
    try{
     const user= await User.findOne({emailid:userEmail});
     if(user.length===0){
        res.send("User Not found")
     }
     else{
        res.send(user);
     }
    }
    catch(err){
        res.status(404).send("User Not Found");
    }

});
app.delete("/user", async (req,res)=>{
    const userID=req.body.userID
    try{
        const user=await User.findByIdAndDelete(userID);
        res.send("User Deleted Succesfully");
    }
    catch(err){
        res.status(400).send("Something Went Wrong")
    }
})
app.patch("/user", async (req,res)=>{
    const userId=req.body.userId;
    const data=req.body;

    
    try{
        await User.findByIdAndUpdate({_id:userId},data,{
            returnDocument:"after",
            runValidators:true
        });
        res.send("User Updated Successfully");
    }
    catch(err){
        res.status(400).send("Something went wrong");

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

