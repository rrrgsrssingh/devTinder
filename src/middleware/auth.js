const authAdmin=(req,res,next)=>{
    const token ="xyz"
    const isAuthorised=token==="xyz";
    if(!isAuthorised){
        res.status(401).send("Unauthorised");
    }
    else{
        next();
    }
}
const authUser=(req,res,next)=>{
    const token ="xyz"
    const isAuthorised=token==="xyz";
    if(!isAuthorised){
        res.status(401).send("Unauthorised");
    }
    else{
        next();
    }
}
module.exports={
    authAdmin,authUser
}