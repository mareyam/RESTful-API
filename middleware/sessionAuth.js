function sessionAuth(req, res, next) {
    res.locals.user = req.session.user;
    next();
}

module.exports = sessionAuth;

//picking value from session and saving in res local user
