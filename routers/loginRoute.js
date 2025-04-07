const jwt = require("jsonwebtoken");
const logger = require('../helper/index');

const users = [{
    name: "surya",
    password : "12345678"
}]

async function login(req,res,next){
    try {
        const {name, password} = req.body;
        logger.info({name, message:"login"});
        const user = users.find(user => user.name === name && user.password === password);
        if (user){
            const token = jwt.sign({name}, 'ThisisASecretKey', {expiresIn: '1h'});
            logger.info({name, message:"Token Generated and sent successfully"})
            res.json({token});
        }else{
            logger.warn({message: "Invalid user"});
            res.send("Invalid Email or Password");
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {login, users};