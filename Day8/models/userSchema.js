const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
        trim : true,
        minlength: [3, 'Name should be atleast 3 characters long'],
        maxlength: [20, 'Name should be atmost 20 characters long']

    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
       match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is not valid']
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password should be atleast 6 characters long'],
        maxlength: [15, 'Password should be atmost 15 characters long'],
        select: false
    }
});
const User=mongoose.model('User',userSchema);
module.exports=User;
