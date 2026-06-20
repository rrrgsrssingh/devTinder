const express=require("express");
const app=express();
app.use("/saurav",(req,res)=>{
    res.send("Hello Saurav I am calling from the server")
});
app.get("/user",(req,res)=>{
  res.send({firstName:"Saurav",lastName:"Kumar" ,age:"28", Address:"At Nadiyawan dist-Lakhisarai State-Bihar"});
});
port=7000;
app.listen(port,()=>{
    console.log(" I am Up Saurav Kumar")
})