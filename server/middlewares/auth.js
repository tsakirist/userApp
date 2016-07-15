module.exports.authMiddleware = (req, res, next) => {
    if(req.isAuthenticated()) {
        console.log('User is authenticated');
        next();
    }
    else {
        const err = new Error('User is not authenticated');
        err.status = 401;
        next(err);
    }
};
