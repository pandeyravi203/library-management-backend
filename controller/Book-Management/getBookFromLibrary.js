const express=require('express')
const router=express.Router()
const bookStore=require('../../models/bookStore')
const jwt=require('jsonwebtoken')
router.get('/',(req,res)=>{
     
          if(req.query.bookName=='')
          {
            var token=req.query.token
            var legit=jwt.verify(token,'ravi_pandey')
            console.log(legit)
                   bookStore.find({},(err,result)=>{
                   res.send(result)
             }) 
          }
       
   

})

module.exports=router