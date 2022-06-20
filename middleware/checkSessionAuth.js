function checkSessionAuth(req, res, next) {
    if(req.session.user) next();
    else return res.redirect("/products");
}

module.exports = checkSessionAuth;

//picking value from session and saving in res local user
