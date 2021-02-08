const jwt = require("express-jwt")

const getTokenFromHeaders = (req) =>{
    console.log("Error:",req.headers)
    const {headers:{authorization}}=req
    if (authorization && authorization.split(" ")[0]==="token"){
        console.log("Pöö:",authorization)
        return authorization.split(" ")[1];
    }
    return null;
}

const auth = {
    required:jwt({
        secret:process.env.SECRET,
        userProperty:"payload",
        algorithms:['HS256'],
        getToken:getTokenFromHeaders
    })
}

module.exports= auth;