var jwt = require('jsonwebtoken');
var bcrypt=require('bcrypt')
const SALT_ROUNDS=5
let alkuhetki = Date.now()
let loppuhetki
let hashattuSalasana

bcrypt.hash("Kissa", SALT_ROUNDS,(err,hash)=>{

    hashattuSalasana = hash
    loppuhetki =Date.now()
    console.log("Operaatio kesti: ",loppuhetki-alkuhetki)

    bcrypt.compare("Kissa",hashattuSalasana,function(err,result){
        if (err){
            console.log(err)
        }else {
              console.log(result)
        }
      
    })
});

// Store hash in your password DB.
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// console.log("Alkuperäinen",token)
// token2=token

// console.log("Sormeiltu",token2)

// try {
//     let result=jwt.verify(token2, 'shhhhh')
//     console.log("Token verifioitu",result)
// } catch (e) {
//     console.log("Tokeni ei ole ok")
// }

