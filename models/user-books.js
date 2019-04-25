const mongoose=require('mongoose')
const userBook=mongoose.model('userBook',{
    userName:{
        type:'string'
    },
    books:{
        type:Array,
      },
})

module.exports=userBook