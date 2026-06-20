const express=require("express");
const app=express();
// app.use("/saurav",(req,res)=>{
//     res.send("Hello Saurav I am calling from the server")
// });
const {authAdmin,authUser}= require("./middleware/auth")
app.use("/admin",authAdmin);
app.use("/user",authAdmin);

app.get("/admin/getAlldata",(req,res)=>{
    res.send("Data Sent Back");
});
app.get("/admin/deleteData",(req,res)=>{
    res.send("data Deleted");
})
app.get("/user/loggedin",(req,res)=>{
    res.send("Login SuccessFull");
})
app.get("/user/loggedout",(req,res)=>{
    res.send("Logout Successfully");
})
// Error Handling
app.get("/userData",(req,res)=>{
    try{
        throw new error("xyshdhd");
        
        res.send("Hello");
    }
    catch(err){
        res.status(500).send("Something Went Wrong");
    }
})
app.use("/",(err,req,res,nex)=>{
    if(err){
        res.send(500).send("Calling from the wild error Handling");
    }
});
// app.use("/saurav",(req,res,next)=>{
//     //res.send("This is the first route handler");
//     next();},
//     (req,res)=>{
//         res.send("Second Route Handler");
//     }
// )
// app.get("/user/:userId/:password",(req,res)=>{
//     console.log(req.params);
//   res.send({firstName:"Saurav",lastName:"Kumar" ,age:"28", Address:"At Nadiyawan dist-Lakhisarai State-Bihar"});
// });
port=7000;
app.listen(port,()=>{
    console.log(" I am Up Saurav Kumar")
})