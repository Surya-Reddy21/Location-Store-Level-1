const jwt = require("jsonwebtoken");

const users = [{
    name: "surya",
    password : "12345678"
}]

async function login(req,res,next){
    try {
        const {name, password} = req.body;
        const user = users.find(user => user.name === name && user.password === password);
        if (user){
            const token = jwt.sign({name}, 'ThisisASecretKey', {expiresIn: '1h'});
            res.json({token});
        }else{
            res.send("Invalid Email or Password");
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {login, users};