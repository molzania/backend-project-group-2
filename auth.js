const jwt = require('jsonwebtoken')
const accessTokenSecret = "tokenKelompok-2"

const authenticateJWT = (req, res, next)=>{
    const authHeader = req.headers.authorization;
   
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, accessTokenSecret, (error, user) => {
            if (error) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

module.exports = authenticateJWT;
