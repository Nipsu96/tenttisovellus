const express = require('express')
const app = express()
var jwt = require('jsonwebtoken');
var path= require('path')
const SALT_ROUNDS = 5
var bcrypt = require('bcrypt')
const cors = require("cors")
var bodyParser = require("body-parser")
const db = require('./db')
const fileUpload = require('express-fileupload')
module.exports = app
const httpServer = require('http').createServer(app)
var port = process.env.PORT || 3005

app.use(bodyParser.json())
app.use(express.static('./client/build'))

// http://localhost:3005
//https://tenttisovellus-niko.herokuapp.com



var appOrigin = null
var con_string = null
if (!process.env.HEROKU){
  con_string= 'tcp://postgres:Fullstack2020_NikoL@localhost:5432/TenttiKanta';
  appOrigin= 'http://localhost:3000'
  console.log("frontiiiiiii:",appOrigin)
} else{
  con_string= process.env.DATABASE_URL;
  appOrigin= 'https://tenttisovellus-niko.herokuapp.com/'
  console.log("frontHEroke:",appOrigin)
}

var corsOptions ={
  origin:appOrigin,
  optionSuccessStatus:200,
  methods:"GET,PUT,POST,DELETE"
}
app.use(cors(corsOptions))
console.log(corsOptions)
app.use('/socket.io', express.static(__dirname + '/node_modules/socket.io'))

var io = require('socket.io')(httpServer, {
  cors: {
    origin: appOrigin,
    methods: ["GET", "POST"]
  }
})

//https://expressjs.com/en/resources/middleware/cors.html


app.use(fileUpload({
  limits: { fileSize: 2 * 1024 * 1024 * 1024 },
}));
 //static socket.io

// app.use('/paljonkelloon', function (req, res, next) {
//   console.log('Kello on :', Date.now())
//   next()
// })

// httpServer.listen(9000)

// var io = require('socket.io')(5432);
var pg = require('pg');

// var con_string = 'tcp://postgres:Fullstack2020_NikoL@localhost:5432/TenttiKanta';

var pg_client = new pg.Client(con_string);
pg_client.connect();
var query = pg_client.query('LISTEN kysymys_nimi');
var query1 = pg_client.query('LISTEN vastaus_nimi');
pg_client.on('notification', async (data) => {
})

io.on('connection', function (socket) {
  socket.emit('connected', { connected: true });

  socket.on('ready for data',(data) =>{
    pg_client.on('notification', (payload) =>{
      socket.emit('update', { message: payload})
    });
  });
});



// app.get('/tentit/:id', (req, res, next) => {

//   db.query('SELECT * FROM tentti_taulu WHERE tentti_id = $1', [req.params.id], (err, result) => {
//     if (err) {
//       return next(err)
//     }
//     res.send(result.rows[0])
//   })
// })
// // ... many other routes in this file
// keskiarvo SQL-Lauseet
app.get('/keskiarvot', (req, res, next) => {
  db.query('SELECT keskiarvo.keskiarvo,oppilaat.etunimi,oppilaat.sukunimi FROM keskiarvo INNER JOIN oppilaat ON keskiarvo.oppilas_id = oppilaat.oppilas_id', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})
app.put('/tenttitulokset', (req, res, next) => {
  db.query('SELECT DISTINCT oppilas_id FROM tenttitulokset', (err, result) => {
    if (err) {
      return next(err)
    }
    for (let x = 0; x < result.rows.length; x++) {
      db.query('UPDATE public.keskiarvo SET keskiarvo= (SELECT AVG(tulos) FROM tenttitulokset WHERE oppilas_id=$1) WHERE oppilas_id= $1;', [result.rows[x].oppilas_id], (err, result) => {
        if (err) {
          return next(err)
        }
      })
    }
    return res.sendStatus(200)
  })
})

// TenttiTaulun SQL-lauseet
// Yksittäiset SQL-Lauseet
app.get('/tentit', (req, res, next) => {
  db.query('SELECT * FROM tentti_taulu', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})
app.post('/tentit', (req, res, next) => {
  db.query("INSERT INTO tentti_taulu (tentin_nimi, user_id) VALUES ($1,$2)", [req.body.tentin_nimi, req.body.user_id,], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Lisäys onnistui')
  })
})
app.delete('/tentit/:id', (req, res, next) => {
  db.query('DELETE FROM tentti_taulu WHERE tentti_id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Poisto onnistui')
  })
})
app.put('/tentit/:id', (req, res, next) => {
  db.query("UPDATE tentti_taulu SET tentin_nimi='Testataan Puttia',user_id= '2' WHERE tentti_id = $1", [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Päivitys onnistui')
  })
})

//kysymystaulu
app.get('/kysymykset', (req, res, next) => {
  db.query('SELECT * FROM kysymykset ORDER BY kysymys_id ', (err, result) => {//order by id
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

app.get('/kysymykset/:tentti_id', (req, res, next) => {
  db.query('SELECT * FROM kysymykset WHERE tentti_id=$1 ORDER BY kysymys_id ', [req.params.tentti_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})
app.post('/kysymykset', (req, res, next) => {
  const QuestionData = {
    kysymys_nimi: req.body.kysymys_nimi,
  }
  db.query("INSERT INTO kysymykset (kysymys_nimi, tentti_id) VALUES ($1,$2)", [QuestionData.kysymys_nimi, req.body.tentti_id,], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Lisäys onnistui')
  })
})
app.delete('/kysymykset', (req, res, next) => {
  db.query('DELETE FROM kysymykset WHERE kysymys_id = $1', [req.body.kysymys_id], (err, result) => {
    if (err) {
      return next(err)
    }
    console.log("Poisto onnistui")
    res.send('Poisto onnistui')
  })
})
app.put('/kysymykset', (req, res, next) => {
  db.query("UPDATE kysymykset SET kysymys_nimi=$1 WHERE kysymys_id = $2", [req.body.kysymys_nimi, req.body.kysymys_id], (err, result) => {
    if (err) {
      console.log(err)
      return next(err)
    }
    console.log("Muokkaus onnistui")
    res.send('Päivitys onnistui')
  })
})


// vastausvaihtoehdot

app.get('/vastausvaihtoehdot', (req, res, next) => {
  db.query('SELECT * FROM vastaus_vaihtoehdot ORDER BY vaihtoehto_id ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

app.get('/vastausvaihtoehdot/:kysymys_id', (req, res, next) => {
  db.query('SELECT * FROM vastaus_vaihtoehdot WHERE kysymys_id=$1 ORDER BY vaihtoehto_id', [req.params.kysymys_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

app.post('/vastausvaihtoehdot', (req, res, next) => {
  const userData = {
    vastaus_nimi: req.body.vastaus_nimi,
    oikea_vastaus: req.body.oikea_vastaus
  }
  console.log(userData)
  db.query("INSERT INTO vastaus_vaihtoehdot (vastaus_nimi,kysymys_id,oikea_vastaus) VALUES ($1,$2,$3)", [userData.vastaus_nimi, req.body.kysymys_id, userData.oikea_vastaus], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Vaihtoehdon lisäys onnistui')
  })
})
app.delete('/vastausvaihtoehdot', (req, res, next) => {
  console.log(req.body)
  db.query('DELETE FROM vastaus_vaihtoehdot WHERE vaihtoehto_id = $1', [req.body.vaihtoehto_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Poisto onnistui')
  })
})
app.put('/vastausvaihtoehdot', (req, res, next) => {
  db.query("UPDATE vastaus_vaihtoehdot SET vastaus_nimi=$1 WHERE vaihtoehto_id = $2", [req.body.vastaus_nimi, req.body.vaihtoehto_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Päivitys onnistui')
  })
})
app.put('/vastausvaihtoehdot/oikea', (req, res, next) => {
  db.query("UPDATE vastaus_vaihtoehdot SET oikea_vastaus=$1 WHERE vaihtoehto_id = $2", [req.body.oikea_vastaus, req.body.vaihtoehto_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Päivitys onnistui')
  })
})

// Käyttäjän vastaukset
app.get('/vastaukset', (req, res, next) => {
  db.query('SELECT * FROM vastaukset ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

app.post('/vastaukset', (req, res, next) => {
  db.query('INSERT INTO vastaukset (vastaus,kysymys_id,vaihtoehto_id) VALUES ($1,$2,$3)', [req.body.vastaus, req.body.kysymys_id, req.body.vaihtoehto_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Lisäys onnistui')
  })
})

app.put('/vastaukset', (req, res, next) => {
  console.log(req.body)
  db.query('UPDATE vastaukset SET vastaus=$2  WHERE vaihtoehto_id = $1', [req.body.vaihtoehto_id, req.body.vastaus], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('put onnistui')
  })
})
app.delete('/vastaukset/:id', (req, res, next) => {
  db.query('DELETE FROM vastaukset WHERE vastaus_id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Poisto onnistui')
  })
})

//Vastausten poisto listasta jos niitä ei ole valittu
// app.delete('/vastaukset', (req, res, next) => {
//   db.query('DELETE FROM vastaukset WHERE vastaus=false', (err, result) => {
//     if (err) {
//       return next(err)
//     }
//     res.send('Väärien poisto onnistui')
//   })
// })


app.put('/vastaukset/:id', (req, res, next) => {
  db.query("UPDATE vastaukset SET vastaus=false WHERE vastaus_id = $1", [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Päivitys onnistui')
  })
})

// Käyttäjän haku
app.get('/users', (req, res, next) => {
  db.query('SELECT * FROM users ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

// INNER JOINIT
app.get('/tenttikysymykset', (req, res, next) => {
  db.query('SELECT kysymykset.kysymys_nimi FROM kysymykset INNER JOIN tentti_taulu ON kysymykset.tentti_id = tentti_taulu.tentti_id ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

// rekisteröinti
app.post('/users', (req, res) => {
  const today = new Date()

  const userData = {
    etunimi: req.body.etunimi,
    sukunimi: req.body.sukunimi,
    email: req.body.email,
    salasana: req.body.salasana,
    onko_opettaja: req.body.onko_opettaja
  }
  // let invalid = (Object.values(userData).some(item => {
  //   return item == undefined
  // }))
  // if (invalid) return res.json({ error: "Values missing" })  

  console.log("Nyt rekisteröidytään", userData)
  db.query('select * FROM users where email=$1', [userData.email], (err, result) => {
    if (err) {
      return res.json("Nyt on errori")
    }
    user = result.rows.length > 0 ? result.rows[0].email : null
    if (user !== null) {
      console.log('username already taken');
      return res.json({ error: "User already exists!" })
    } else {
      bcrypt.hash(userData.salasana, SALT_ROUNDS, (err, hash) => {
        // bcrypt.hash(userData.password, SALT_ROUNDS).then(hashedPassword => {
        //hashedPassword = userData.password
        hashedPassword = hash
        db.query('insert into users (etunimi,sukunimi,email,salasana,onko_opettaja) values ($1,$2,$3,$4,$5)', [userData.etunimi, userData.sukunimi, userData.email, hashedPassword, userData.onko_opettaja], (err, result) => {
          if (err) {
            throw "Error! Cant create user!"
          }
          console.log('user created');
          res.json({ message: userData.email + ' registered' })
        });
      });
    }
  });
})

app.post('/upload', function (req, res) {
  /* if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  } */
  console.log("Req.Files", req.files)
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let newFile = req.files.file;
  let newName = req.files.file.name;
  console.log(newName)
  // let date = Date.now().toString();
  let fileName = newName
  newFile.mv('./img/' + fileName, function (err) {
    if (err) {
      return res.status(500).send(err)
    }
  });
  console.log("hereweare")
});

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

httpServer.listen(port,() => {
  console.log(`Example app listening at http://localhost:${port}`)
})
