const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app  =  express();
const router = require('./routes/router');
const passport = require('passport');
const session = require('express-session');
const path = require('path');

require('./config/passport');

mongoose.connect('mongodb://localhost/users', (err) => {
    if(err){
        console.log("Some error occurred with the database");
    }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/node_modules', express.static('../node_modules/'));
app.use(express.static('../client/'));
app.use(router);

app.get('*', (req, res) => {
    if(req.isAuthenticated()) {
        console.log('Authenticated req');
        res.sendFile(path.resolve(__dirname + '/../client/private/index.html'));
    }
    else {
        console.log('Not authenticated req');
        res.sendFile(path.resolve(__dirname + '/../client/public/index.html'));
    }
});

mongoose.connection.once('open', () => {
    app.listen(3000);
    console.log('Listening at 3000');
});
