import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username :{
        type:String,
        unique : true,
        required : true
    },
    hashPassword :{
        type:String,
        required : true
    }
},{timestamps :true});

const User = mongoose.model('User',userSchema);
export default User;