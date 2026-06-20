const express=require("express");
const app=express();
app.use((req,res)=>{
    res.send("Hello Saurav I am calling from the server")
});
port=4000;
app.listen(port,()=>{
    console.log(" I am Up Saurav Kumar")
})