const { Pool } = require('pg')

var connectInfo = {}

if (process.env.HEROKU){
  connectInfo= {
    user: 'postgres',
    host: 'localhost',
    database: 'TenttiKanta',
    password: 'Fullstack2020_NikoL',
    port: 5432,
  }
}else{
  connectInfo= {
    user: 'postgres',
    host: 'localhost',
    database: 'TenttiKanta',
    password: 'Fullstack2020_NikoL',
    port: 5432,
}}
// const pool = new Pool(connectInfo)
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'TenttiKanta',
    password: 'Fullstack2020_NikoL',
    port: 5432,
  })
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}