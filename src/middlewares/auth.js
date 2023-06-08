
const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY;


const auth = (req , res , next) => {

    try {
        // now 1st we will check that there is token present or not , token will be passed thru headers

        let token = req.headers.authorization;

        if(token){
            token = token.split(" ")[1]; // beacuse there usually more information present with token

            let user = jwt.verify(token , SECRET_KEY) // verify function decrypts the token

            req.userId = user.id;
        } else {
            return res.status(401).json({message : "unauthorized user!!"});
        }

        next();

    } catch(error){
        console.log(error);
        res.status(401).json({message : "unauthorized user!!"});
    }
}

module.exports = auth;