require('dotenv').config();
const express = require('express');
const {login} = require("./routers/loginRoute");
const registerUser = require("./routers/registerRoute");
const insertLocation = require("./db/updateLocation");
const authenticate = require("./middleware/authMiddleware")

const app = express();
const port = 3007;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/login", login);
app.use("/api/register", registerUser);

app.post("/api/location", authenticate, async (req, res) => {
    try {
        const {latitude, longitude} = req.body;
        const response = await insertLocation(latitude, longitude);
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(port, () => {
    console.log(`Application Listening on the port ${port}`);
});



