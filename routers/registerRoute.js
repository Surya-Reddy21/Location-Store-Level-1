const {users} = require("./loginRoute");

function registerUser(req, res){
    const {name, password} = req.body;
    users.push({name, password})
    res.send("Registered Succesfully with user name", name);
}

module.exports = registerUser;