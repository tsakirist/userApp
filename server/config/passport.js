const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = new require('../models/users');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, (err, user) => {
        if(err){
            return done(err);
        }
        return done(null, user);
    });
});

passport.use('local-login', new LocalStrategy( (username, password, done) => {
    User.findOne({username}, function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            console.log('User  not found');
            return done(null, false, {message: 'Unknown User ' + username});
        }
        else if (user.password != password) {
        // else if(!user.validPassword(password)) {
            console.log('Wrong password');
            return done(null, false, { message: 'Wrong password'});
        }
        else{
            console.log('successful: ' + username);
            return done(null, user);
        }
    });
}));
