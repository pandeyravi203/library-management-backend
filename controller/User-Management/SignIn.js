const express = require('express')
const router = express.Router()
const User=require('../../models/user')
var bcrypt=require('bcrypt')
var jwt=require('jsonwebtoken')
router.post('/', (req, res) => {
    var token=jwt.sign(req.body,"ravi_pandey")
    console.log(token)
    User.findOne(req.body,(err,user)=>{
        if(user)
        {
         
            var data={
                id:user._id,
                stat:"active",
                role:user.role,
                firstName:user.firstName,
                userName:user.userName,
                token:token
            }
            res.send(data)
        }
      
        else
        res.send("Invalid User")
        if(err)
        res.send("Invalid User")
    })
  
})
module.exports = router