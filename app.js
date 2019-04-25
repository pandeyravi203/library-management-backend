var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


require('./database/mongoose')

var signIn=require('./controller/User-Management/SignIn')
var addBookToLibrary=require('./controller//Book-Management/AddBookToLibrary')
var getBookFromLibrary=require('./controller//Book-Management/getBookFromLibrary')
var userBookManager=require('./controller/Book-Management/userBookManager')
var userManagement=require('./controller/User-Management/userManagement')

var app = express();
app.use(cors())
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/signin',signIn)
app.use('/addBookToLibrary',addBookToLibrary)
app.use('/getBookFromLibrary',getBookFromLibrary)
app.use('/userBookManager',userBookManager)
app.use('/userManagement',userManagement)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
