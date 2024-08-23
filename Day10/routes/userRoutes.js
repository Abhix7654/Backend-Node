const express = require('express');
const router = express.Router();
const userModule=require('../models/userSchema');

router.get('/',async(req,res)=>{
    try{
        const newusers= new userModule(req.body);
        const users= await newusers.save();
        res.status(200).send(users);
    }catch(error){
        res.status(500).send(error.message);
    }
});

module.exports = router;