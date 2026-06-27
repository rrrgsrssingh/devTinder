const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        unique: true,
     minlength:4,
     maxlength:50
    },
    lastName: {
        type:String,
    },
    emailid:{
        type:String,
        required:true,
        index:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        },
    age:{
        type:Number,
        min:18,
        max:65
    },
    gender:{
        type:String,
        validate(value){
            if(!['male','female','others'].includes(value)){
                throw new Error("Gender Data is not valid please take male female or others");
            }

        },
    },
    about:{
        type:"String",
        default:"This is the About page you can write anything About you.",
    },
    skills:{
        type:["String"],
    },
    photourl:{
        type:"String",
        default:"https://img.magnific.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?semt=ais_hybrid&w=740&q=80",
    }
},{
    timestamps:true
})
module.exports=mongoose.model("User",userSchema);