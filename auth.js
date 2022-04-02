<<<<<<< HEAD
const jwt = require("jsonwebtoken");
const accessTokenSecret = "tokenKelompok-2";

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, accessTokenSecret, (error, user) => {
            if(error){
=======
const jwt = require('jsonwebtoken')
const accessTokenSecret = "tokenKelompok-2"

const authenticateJWT = (req, res, next)=>{
    const authHeader = req.headers.authorization;
   
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, accessTokenSecret, (error, user) => {
            if (error) {
>>>>>>> 5c9e5dac6b9da914100d8ca9d454bcf3a51e9473
                return res.sendStatus(403);
            }
            req.user = user;
            next();
<<<<<<< HEAD
        })
    } else {
        res.sendStatus(401).json({ 
            message: "gagal ambil token"
        });
    }
}

module.exports = authenticateJWT;
=======
        });
    } else {
        res.sendStatus(401);
    }
}

module.exports = authenticateJWT;
>>>>>>> 5c9e5dac6b9da914100d8ca9d454bcf3a51e9473
