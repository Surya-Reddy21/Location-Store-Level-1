const jwt = require("jsonwebtoken");

function authenticate(req, res, next){
    const token = req.headers.authorization.slice(7);
    console.log("jwt", req.headers.authorization.slice(7))
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }else{
        const decoded = jwt.verify(token, "ThisisASecretKey");
        if (decoded){
            req.user = decoded;
            next();
        }else{
            return res.status(401).send({ message: 'Invalid token' });
        }
    }
}

module.exports = authenticate;