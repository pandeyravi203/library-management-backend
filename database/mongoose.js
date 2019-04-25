const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/library-management',{useNewUrlParser:true,useCreateIndex:true})


// module.exports=User
// const user=new User({
//     userName:'Ravikant',
//     firstName:'Ravi',
//     lastName:'Pandey',
//     password:'Allaahabad'
// })
// user.save().then((user)=>{
//    console.log(user)
// }

// ).catch(error=>{
//     console.log(error)
// })