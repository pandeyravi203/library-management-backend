const mongoose=require('mongoose')
const bookStore=mongoose.model('bookStore',{
   bookCollection:{
       type:Array
   }
})
module.exports=bookStore