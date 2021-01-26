const { Pool } = require('pg')

var connectInfo = {}
var pool=null;
if (process.env.HEROKU){
 pool = new Pool({connectionString:process.env.DATABASE_URL})

}else{
  connectInfo= {
    user: 'postgres',
    host: 'localhost',
    database: 'TenttiKanta',
    password: 'Fullstack2020_NikoL',
    port: 5432,
}
pool = new Pool(connectInfo)
}


//  connectInfo= {
  // user: 'dlcuciftcpzips',
  // host: 'ec2-54-75-225-52.eu-west-1.compute.amazonaws.com',
  // database: 'dc8v3e46ejoirp',
  // password: '4b4b49650249e4eb8e792e52c4f01146d525205945d1316061673554cf540b2a',
  // port: 5432,


// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'TenttiKanta',
//     password: 'Fullstack2020_NikoL',
//     port: 5432,
//   })
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}