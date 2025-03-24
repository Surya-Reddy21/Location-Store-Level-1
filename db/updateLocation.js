const pool = require("./index");


async function insertLocation(latitude,longitude) {
    try{
        const [rows] = await pool.query('Insert into locations (latitude, longitude, name) values (?, ?, ?)', [latitude, longitude, 'test']);
        return 'Inserted Location Details';
    }catch(e){
        throw new Error("Error while inserting location");
    }
}

module.exports = insertLocation;