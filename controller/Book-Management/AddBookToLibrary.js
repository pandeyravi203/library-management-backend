const express=require('express')
const router=express.Router()
const book=require('../../models/book')
var bookStore=require('../../models/bookStore')
router.post('/',function(req,res){
  
   newbook=new book(req.body)
   bookStore.update({_id:"5cb7018f6bd69a2406eca34b"},{$push:{"bookCollection":newbook}},(err,result)=>{
       if(result)
       {
           console.log(result)
       }
       else{
          console.log("error occured")
       }
   })
   
      
     
});
module.exports=router