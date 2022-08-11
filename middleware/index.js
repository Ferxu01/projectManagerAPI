module.exports.httpHeaders = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
};