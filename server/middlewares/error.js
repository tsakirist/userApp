module.exports.errorHandler = (err, req, res, next) => {
    console.log('Inside error handler');
    res.status(err.status || 500).send(err);
};