const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const User = new require('../models/users');

const authMiddleware = require('../middlewares/auth').authMiddleware;  //Import authMiddleware

router.use(require('../middlewares/error').errorHandler);

router.post('/api/login', passport.authenticate('local-login'), (req, res) => {
    console.log('Logged in');
    res.json(req.user);
});

router.get('/api/profile/user', authMiddleware, (req, res) => {
    res.json(req.user);
});

router.get('/private/logout', (req,res) => {
    console.log('Request for logout');
    req.logout();
    res.status(200).redirect('/');  //Redirect is necessary when user reloads(F5) the page , it's not handled by angular!
});

User.methods(['post', 'delete', 'get', 'put']);
User.before('get', authMiddleware).before('delete', authMiddleware).before('put', authMiddleware);

User.register(router, '/api/users');

module.exports = router;