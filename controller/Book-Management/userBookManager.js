const express = require('express')
const router = express.Router()
var userBooks = require('../../models/user-books')

router.get('/', (req, res) => {
    console.log(req.query)
    userBooks.find({
        userName: req.query.userName
    }, (err, books) => {
        console.log(books)
        res.send(books)
    })
})
router.post('/', (req, res) => {
   
     userBooks.findOne({userName:req.body.userName},(err,user)=>{
        var book=req.body.book
        book.startDate=req.body.startDate
        book.enddate=req.body.endDate
        if(user==null)
        {
            
            console.log(req.body)
            var newUserBook=new userBooks({userName:req.body.userName})
            newUserBook.save()
            userBooks.updateOne({userName:req.body.userName},{$push:{"books":book}},(err,result)=>{
                   console.log(result)
            })
        }
        else
        {
            userBooks.updateOne({userName:req.body.userName},{$push:{"books":book}},(err,result)=>{
                
         })

        }

     })


})
router.put('/',(req,res)=>{
    console.log(req.body)
     userBooks.update({userName:req.body.userName},  { $pull: { "books" : { bookName: "Ravi" } } },(err,result)=>{
        userBooks.find({
            userName: req.body.userName
        }, (err, books) => {
            console.log(books)
            res.send(books)
        })
     }) 
})
module.exports = router