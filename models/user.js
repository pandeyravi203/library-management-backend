const mongoose=require('mongoose')
const User=mongoose.model('User',{
    id:{
         type:'string'
    },
    role:{
        type:'string'
    },
    userName:{
         type:'string'
           
    },
    firstName:{
        type:'string'

    },
    lastName:{
        type:'string'

    },
    email:{
        type:'string'
    },
    hash_password:{
        type:'string'

    }
})

module.exports=User

