const mongoose=require('mongoose')
const book=mongoose.model('book',{
    id:{
        type:'string'
    },
    bookName:{
        type:'string'
    },
    publisher:{
        type:'string'
    },
    writer:{
        type:'string'
    },
    availibility:{
        type:'string'
    }
})
module.exports=book