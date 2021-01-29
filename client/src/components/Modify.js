import React, { useState, useCallback } from 'react';
import '../App.css';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import { useDropzone } from 'react-dropzone'
const request = require('superagent');

var path = null

switch(process.env.NODE_ENV){
  case 'production':
    path= 'https://tenttisovellus-niko.herokuapp.com/'
    break;
  case 'developement':
    path= 'http://localhost:3005/'
    break;
  case 'test':
    path='http://localhost:3005/'
    break;
  default:
    throw " Enviroment not properly set!"  
  
}

function ChangeTests(props) {

  const onDrop = useCallback(files => {

    console.log("Tämä on file:", files);

    const req = request.post(path+'upload');
    console.log(" Tämä on Req", req)

    files.forEach(file => {
      req.attach('file', file);

    });
    req.end((err, res) => {
      console.log("Tämä on res", res)
    })

  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


  const [aktiivinenTentti, setAktiivinenTentti] = useState(0)

  const vaihdaTentti = (tentti_id) => {
    setAktiivinenTentti(tentti_id)
  }
  // axios post

  const kysymysData = {
    kysymys_nimi: ''
  }

  const uusiKysymys = async (e, tentti_id, aktiivinenTentti) => {
    e.preventDefault()
    let uusikysymys = kysymysData
    console.log("Uusikysymys", uusikysymys)
    await axios.post(path+"kysymykset", {
      kysymys_nimi: uusikysymys.kysymys_nimi, tentti_id: tentti_id.toString()
      //req.body.kysymys_nimi,req.body.tentti_id,
    })
    props.dispatch({ type: "LISAA_KYSYMYS", data: { newQuestion: uusikysymys, tenttiindex: [aktiivinenTentti] } })
  }

  const userData = {
    vastaus_nimi: '',
    oikea_vastaus: false
  }

  const uusiVaihtoehto = async (e, kysymys_id, kysymysindex, aktiivinenTentti) => {
    e.preventDefault()
    let uusivaihtoehto = userData
    console.log("Uusivaihtoehto", uusivaihtoehto)
    await axios.post(path+"vastausvaihtoehdot", {
      vastaus_nimi: uusivaihtoehto.vastaus_nimi,
      oikea_vastaus: uusivaihtoehto.oikea_vastaus, kysymys_id: kysymys_id.toString()
    })
    props.dispatch({ type: "LISAA_VASTAUS", data: { newAnswer: uusivaihtoehto, tenttiindex: [aktiivinenTentti], kysymysindex: kysymysindex } })
  }

  // axios put
  const kysymysMuuttui = async (e, kysymys_id, kysymysindex, aktiivinenTentti) => {
    let uusikysymys = e.target.value
    await axios.put(path+"kysymykset", { kysymys_nimi: e.target.value, kysymys_id: kysymys_id.toString() })
    props.dispatch({ type: "KYSYMYS_MUUTTUI", data: { newQuestion: uusikysymys, tenttiindex: aktiivinenTentti, kysymysindex: kysymysindex } })
  }
  //e, alkio.vaihtoehto_id, alkio.kysymys_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex
  const vastausVaihtoehtoMuuttui = async (e, vaihtoehto_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex) => {
    let uusivaihtoehto = e.target.value
    await axios.put(path+"vastausvaihtoehdot", { vastaus_nimi: e.target.value, vaihtoehto_id: vaihtoehto_id.toString() })
    props.dispatch({ type: "VASTAUS_MUUTTUI", data: { newAnswer: uusivaihtoehto, tenttiindex: aktiivinenTentti, kysymysindex: kysymysindex, vaihtoehtoindex: vaihtoehtoindex } })
  }
  const oikeaVastausMuuttui = async (e, vaihtoehto_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex) => {
    let uusiOikeaVastaus = e.target.checked
    await axios.put(path+"vastausvaihtoehdot/oikea", { vaihtoehto_id: vaihtoehto_id.toString(), oikea_vastaus: e.target.checked })
    props.dispatch({ type: "OIKEA_VASTAUS", data: { newRightAnswer: uusiOikeaVastaus, tenttiindex: aktiivinenTentti, kysymysindex: kysymysindex, vaihtoehtoindex: vaihtoehtoindex } })
  }

  // axios delete

  const poistaVastaus = async (e, vaihtoehto_id, kysymys_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex) => {
    await axios.delete(path+"vastausvaihtoehdot", { data: { kysymys_id: kysymys_id.toString(), vaihtoehto_id: vaihtoehto_id.toString() } })
    props.dispatch({ type: "POISTA_VASTAUS", data: { tenttiindex: aktiivinenTentti, kysymysindex: kysymysindex, vaihtoehtoindex: vaihtoehtoindex } })
  }
  const poistaKysymys = async (e, kysymys_id, kysymysindex, aktiivinenTentti,) => {
    await axios.delete(path+"kysymykset", { data: { kysymys_id: kysymys_id.toString() } })
    props.dispatch({ type: "POISTA_KYSYMYS", data: { tenttiindex: aktiivinenTentti, kysymysindex: kysymysindex } })
  }

  return <div>
    <h2 className="modify_title">Tervetuloa admin</h2>
    <div className="main">
      {props.data.map((tentti, index) => <button className="TenttiButton" key={index} onClick={() => vaihdaTentti(index)}>{tentti.tentin_nimi}</button>)}

      <div className="askCards">
        {props.data[aktiivinenTentti].kysymykset.map((item, kysymysindex) =>
          <div key={kysymysindex}
            className="Card">
            <div className="Kysymys" ><span>
              <TextField type="text"
                className="muokkaaKys"
                onBlur={(e) => kysymysMuuttui(e, item.kysymys_id, kysymysindex, aktiivinenTentti)}
                defaultValue={item.kysymys_nimi}
                rows="1" />

            </span>
              <span className="poisto"
                onClick={(e) => poistaKysymys(e, item.kysymys_id, kysymysindex, aktiivinenTentti)}>
                <DeleteIcon style={{ color: "grey", fontSize: 27, margin: "auto", verticalAlign: "middle" }}>
                </DeleteIcon></span></div>


            {item.vaihtoehdot.map((alkio, vaihtoehtoindex) =>
              <div key={vaihtoehtoindex}><label className="checkbox">
                <input type="checkbox"
                  onChange={(e) => oikeaVastausMuuttui(e, alkio.vaihtoehto_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex)}
                  checked={alkio.oikea_vastaus} />
                <span>
                  <TextField type="text"
                    className="muokkaaVas"
                    onBlur={(e) => vastausVaihtoehtoMuuttui(e, alkio.vaihtoehto_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex)}
                    defaultValue={alkio.vastaus_nimi}
                    rows="1" />
                </span>
                <span className="poisto"
                  onClick={(e) => poistaVastaus(e, alkio.vaihtoehto_id, alkio.kysymys_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex)}>
                  <DeleteIcon style=
                    {{
                      color: "grey",
                      fontSize: 29,
                      verticalAlign: "middle"
                    }}>
                  </DeleteIcon>
                </span>
              </label>
                
              </div>)}
            <div className="lisays"
              onClick={(e) => uusiVaihtoehto(e, item.kysymys_id, kysymysindex, aktiivinenTentti)}>
              <AddCircleIcon style=
                {{
                  color: "grey",
                  fontSize: 28,
                  verticalAlign: "middle"
                }}>
              </AddCircleIcon>
            </div>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the Image here ...</p> :
                  <p>Drag 'n' drop Image here, or click to select Image</p>
              }
            </div>
          </div>)}
        <div className="lisaaKys"
          onClick={(e) => uusiKysymys(e, props.data[aktiivinenTentti].tentti_id, aktiivinenTentti)}>
          <AddCircleIcon style=
            {{
              color: "grey",
              fontSize: 28,
              verticalAlign: "middle",
              textAlign: "center"
            }}>
          </AddCircleIcon>
        </div>
      </div>
    </div>
  </div>
}


export default ChangeTests;
