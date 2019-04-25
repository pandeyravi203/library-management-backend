const express=require('express')
const router=express.Router()
const user=require('../../models/user')
const bcrypt=require('bcrypt')

router.get('/',(req,res)=>{
     
      console.log(req.query)
      user.findOne({userName:req.query.userName},(err,result)=>{
               
                res.send(result)
      })
})
router.post('/',(req,res)=>{
    
     
    var newUser=new user(req.body)
    newUser.hash_password=bcrypt.hashSync(req.body.password, 10);

//     newUser.save((err,user)=>{
//       if(err)
//       {
//             res.status(400).send({
//                   msg:err
//             })
//       }
//       else{
//             res.send(user)
//       }
     
//     })
   
})
router.put('/',(req,res)=>{
    
})
router.delete('/',(req,res)=>{
   user.deleteOne({userName:req.query.userName},(err,result)=>{
        res.send("User Deleted SuccessFully")
   }) 
})
module.exports=router