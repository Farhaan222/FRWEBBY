const way = require('express');
const app = way();
const path = require("path");
const bcrypt = require('bcrypt');
app.use('/', way.static(__dirname));
app.use('/signin', way.static(__dirname));
app.use('/signup', way.static(__dirname));
app.use(way.json());
const ejs = require('ejs');
app.set('view-engine','ejs');
app.use(way.urlencoded({ extended:false}));
const knex = require('knex');
const passport = require('passport');
const flash = require("express-flash");
var session =require('express-session');
const { request } = require('http');
const { pool } = require('./database.js');
/*app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));*/
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
app.set('trust proxy', 1);

app.use(session({
  cookie:{
      secure: true,
      maxAge:60000,
         },
  secret: 'secret',
  saveUninitialized: true,
  resave: false
}));
  
app.use(function(req,res,next){
    if(!req.session){
        return next(new Error('Oh no')) //handle error
    }
    next() //otherwise continue
});
app.use(flash());
const db = knex({
    client: 'pg',
    connection: {
      connectionString : "postgres://ydxubzzvvgpjjb:03aec913c660be264a9c9d23b98f5966ad9be1f5042b11cc48cf71988689508d@ec2-107-20-15-85.compute-1.amazonaws.com:5432/dgpbi0av7j418",
      ssl:true,
    }
  });
app.get('/contact',(req,res) => {
    res.render('contact.ejs');
});
app.get('/',function(req,res){
    res.render('home.ejs');
});
app.get('/signin', checkAuthenticated, function(req,res){
    res.render('sign in.ejs')
});
app.post('/signin',async (req,res) => {
      
    db.select('*').from('signin').where('emaill', '=', req.body.email).then((data) => {
        var sigpass = bcrypt.compareSync(req.body.password , data[0].hashedpasswordd);
        if(sigpass === true){
            res.render('content.ejs');
        }
        else{
            res.render('error.ejs');
        }
    }).catch((err) => {
        res.render('error.ejs');
    });
    passport.authenticate("local",{
        successRedirect: "/content",
        failureRedirect: "/signin",
        failureFlash: true
    })
});
function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect("/content")
    }
    next();

}
function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
}
app.get('/signup',checkAuthenticated ,function(req,res){
    /*res.sendFile(path.join(__dirname,"farru1.html"))*/
    res.render('signup.ejs');

});
app.post('/signup',async (req,res) => 
{
        var email = req.body.email;
        var name = req.body.name;
        var password = req.body.password;
        var hashedPassword = await bcrypt.hash(password, 10);
        var phoneno = req.body.phoneno;
        db('Signin').insert({
                emaill : email,
                hashedpasswordd : hashedPassword,
            }).then(res.status(200)).catch((err) => { res.status(500);
                throw err});
        db('frwebby').insert({
            id:Date.now().toString(),
            email: email,
            name : name ,
            password :hashedPassword,
            phoneno : phoneno,
            }).then(res.status(200).render('content.ejs')).catch((err) => {
                res.status(500);
                throw err});
});
app.get('/content',checkNotAuthenticated,(req,res) => {
    res.render('content.ejs')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`hei boy im port ${PORT}`);
})

