// <-------APP

// switch (action.type) {
//     case 'VASTAUS_VALITTU':
//       syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot[action.data.vaihtoehtoindex].valittu = action.data.Answer;
//       return syvakopio
//     case 'OIKEA_VASTAUS':
//       syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot[action.data.vaihtoehtoindex].oikea_vastaus= action.data.newRightAnswer;
//       return syvakopio
//     case 'VASTAUS_MUUTTUI':
//       syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot[action.data.vaihtoehtoindex].vastaus_nimi = action.data.newAnswer
//       return syvakopio
//     case 'KYSYMYS_MUUTTUI':
//       syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].kysymys_nimi = action.data.newQuestion;
//       return syvakopio
//     case 'LISAA_KYSYMYS':
//       console.log("ollaan lisää kysymys:",action.data.newQuestion)
//       let lisaakysymys = syvakopio[action.data.tenttiindex].kysymykset
//       let uusikysymys = action.data.newQuestion
//       lisaakysymys.push(uusikysymys)
//       syvakopio[action.data.tenttiindex].kysymykset= lisaakysymys
//       return syvakopio
//       // let lisaakysymys = syvakopio[action.data.tenttiindex].kysymykset
//       // let uusikysymys = {
//       //   kysymys: "",
//       //   vastaukset: [
//       //     {
//       //       vastaus: "", valittu: false, oikea: false
//       //     }
//       //   ]
//       // }
//       // lisaakysymys.push(uusikysymys)
//       // syvakopio[action.data.tenttiindex].kysymykset = lisaakysymys
//       // return syvakopio
//     case 'LISAA_VASTAUS':
//       console.log("ollaan lisää vastaus:",action.data.newAnswer)
//       let lisaavastaus = syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot
//       let uusivastaus = action.data.newAnswer
//       lisaavastaus.push(uusivastaus)
//       syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot = lisaavastaus
//       return syvakopio
//     case 'POISTA_VASTAUS':
//       console.log("Ollaan poista vastaus:",action.data.vaihtoehtoindex)
//       let poistavastaus = syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot
//       console.log("Splice ei tehty:",syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot)
//       poistavastaus.splice([action.data.vaihtoehtoindex], 1)
//       console.log("Splice tehty:",poistavastaus)
//       syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot = poistavastaus
//       return syvakopio

//     case 'POISTA_KYSYMYS':
//       let poistakysymys = syvakopio[action.data.tenttiindex].kysymykset
//       console.log("Splice ei tehty:",syvakopio[action.data.tenttiindex].kysymykset)
//       poistakysymys.splice([action.data.kysymysindex], 1)
//       console.log("Splice tehty:",poistakysymys)
//       syvakopio[action.data.tenttiindex].kysymykset = poistakysymys
//       return syvakopio
//       // let poistakysymys = syvakopio[action.data.tenttiindex].kysymykset
//       // poistakysymys.splice([action.data.kysymysindex], 1)
//       // syvakopio[action.data.tenttiindex].kysymykset = poistakysymys
//       // return syvakopio
//     case 'INIT_DATA':
//       return action.data
//     default:
//       throw new Error();
//   }
// }



// <----------Modify!!


// // import React, { useState, useCallback } from 'react';
// import '../App.css';
// import DeleteIcon from '@material-ui/icons/Delete';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import axios from 'axios';
// import { TextField } from '@material-ui/core';
// import { useDropzone } from 'react-dropzone'
//  const request = require('superagent');
 

// function ChangeTests(props) {

//   const onDrop = useCallback(files => {
   
//     console.log("Tämä on file:", files);
    
//     const req = request.post('http://localhost:3005/upload');
//     console.log(" Tämä on Req", req)

//     files.forEach(file => {
//       req.attach('file', file);
      
//     });
//     req.end((err, res) => {
//       console.log("Tämä on res",res)
//     })

//   }, [])
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


//   const [aktiivinenTentti, setAktiivinenTentti] = useState(0)

//   const vaihdaTentti = (tentti_id) => {
//     setAktiivinenTentti(tentti_id)
//   }
//   // axios post
//   const kysymysData = {
//     kysymys_nimi: ''
//   }

//   const uusiKysymys = async (e,tentti_id,aktiivinenTentti) => {
//     e.preventDefault()
//     let uusikysymys =kysymysData
//     console.log("Uusikysymys", uusikysymys)
//     await axios.post("http://localhost:3005/kysymykset", {
//       kysymys_nimi: uusikysymys.kysymys_nimi,tentti_id: tentti_id.toString()
//       //req.body.kysymys_nimi,req.body.tentti_id,
//     })
//     props.dispatch({ type: "LISAA_KYSYMYS", data: { newQuestion: uusikysymys, tenttiindex: [aktiivinenTentti]} })
//   }


//   const vaihtoehtoData = {
//     vastaus_nimi: '',
//     oikea_vastaus: false
//   }

//   const uusiVaihtoehto = async (e, kysymys_id, kysymysindex, aktiivinenTentti) => {
//     e.preventDefault()
//     let uusivaihtoehto = vaihtoehtoData
//     console.log("Uusivaihtoehto", uusivaihtoehto)
//     await axios.post("http://localhost:3005/vastausvaihtoehdot", {
//       vastaus_nimi: uusivaihtoehto.vastaus_nimi,
//       oikea_vastaus: uusivaihtoehto.oikea_vastaus, kysymys_id: kysymys_id.toString()
//     })
//     props.dispatch({ type: "LISAA_VASTAUS", data: { newAnswer: uusivaihtoehto, tenttiindex: [aktiivinenTentti], kysymysindex: kysymysindex } })
//   }

//   // axios put
//   const kysymysMuuttui = async (e, kysymys_id, kysymysindex, aktiivinenTentti) => {
//     let uusikysymys = e.target.value
//     await axios.put("http://localhost:3005/kysymykset", { kysymys_nimi: e.target.value, kysymys_id: kysymys_id.toString() })
//     props.dispatch({ type: "KYSYMYS_MUUTTUI", data: { newQuestion: uusikysymys, tenttiindex: aktiivinenTentti, kysymysindex: kysymysindex } })
//   }
//   const vastausVaihtoehtoMuuttui = async (e, vaihtoehto_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex) => {
//     let uusivaihtoehto = e.target.value
//     await axios.put("http://localhost:3005/vastausvaihtoehdot", { vastaus_nimi: e.target.value, vaihtoehto_id: vaihtoehto_id.toString() })
//     props.dispatch({ type: "VASTAUS_MUUTTUI", data: { newAnswer: uusivaihtoehto, tenttiindex: [aktiivinenTentti], kysymysindex: kysymysindex, vaihtoehtoindex: vaihtoehtoindex } })
//   }
//   const oikeaVastausMuuttui = async (e, vaihtoehto_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex) => {
//     let uusiOikeaVastaus = e.target.checked
//     await axios.put("http://localhost:3005/vastausvaihtoehdot/oikea", { vaihtoehto_id: vaihtoehto_id.toString(), oikea_vastaus: e.target.checked })
//     props.dispatch({ type: "OIKEA_VASTAUS", data: { newRightAnswer: uusiOikeaVastaus, tenttiindex: [aktiivinenTentti], kysymysindex: kysymysindex, vaihtoehtoindex: vaihtoehtoindex } })
//   }

//   // axios delete

//   const poistaVastaus = async (e, vaihtoehto_id, kysymys_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex) => {
//     await axios.delete("http://localhost:3005/vastausvaihtoehdot", { data: { kysymys_id: kysymys_id.toString(), vaihtoehto_id: vaihtoehto_id.toString() } })
//     props.dispatch({ type: "POISTA_VASTAUS", data: { tenttiindex: [aktiivinenTentti], kysymysindex: kysymysindex, vaihtoehtoindex: vaihtoehtoindex } })
//   }

//   const poistaKysymys = async (e,kysymys_id, kysymysindex, aktiivinenTentti,) => {
//     await axios.delete("http://localhost:3005/kysymykset", { data: { kysymys_id: kysymys_id.toString() } })
//     props.dispatch({ type: "POISTA_KYSYMYS", data: { tenttiindex: [aktiivinenTentti], kysymysindex: kysymysindex } })
//   }
//   //[req.params.id]

//   return <div>
//     <h2>Tervetuloa admin</h2>
//     <div className="main">
//       {props.data.map((tentti, index) => <button className="TenttiButton" key={index} onClick={() => vaihdaTentti(index)}>{tentti.tentin_nimi}</button>)}
      
//       <div className="askCards">
//         {props.data[aktiivinenTentti].kysymykset.map((item, kysymysindex) =>
//           <div key={kysymysindex}
//             className="Card">
//             <div className="Kysymys" ><span>
//               <TextField type="text"
//                 className="muokkaaKys"
//                 onBlur={(e) => kysymysMuuttui(e, item.kysymys_id, kysymysindex, aktiivinenTentti)}
//                 defaultValue={item.kysymys_nimi}
//                 rows="1" />

//             </span>
//               <span className="poisto"
//                onClick={(e) => poistaKysymys(e, item.kysymys_id, kysymysindex, aktiivinenTentti)}
//                 // onClick={(e) => props.dispatch({ type: "POISTA_KYSYMYS", data: { tenttiindex: [aktiivinenTentti], kysymysindex: kysymysindex } })}
//                 >
//                 <DeleteIcon style={{ color: "grey", fontSize: 25, margin: "auto", verticalAlign: "middle" }}>
//                 </DeleteIcon></span></div>


//             {item.vaihtoehdot.map((alkio, vaihtoehtoindex) =>
//               <div key={vaihtoehtoindex}><label className="checkbox">
//                 <input type="checkbox"
//                   onChange={(e) => oikeaVastausMuuttui(e, alkio.vaihtoehto_id, alkio.kysymys_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex)}
//                   checked={alkio.oikea_vastaus} />
//                 <span>
//                   <input type="text"
//                     className="muokkaaVas"
//                     onChange={(e) => vastausVaihtoehtoMuuttui(e, alkio.vaihtoehto_id, alkio.kysymys_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex)}
//                     value={alkio.vastaus_nimi}
//                     rows="1" >
//                   </input>
//                 </span>
//               </label>
//                 <span className="poisto"
//                   onClick={(e) => poistaVastaus(e, alkio.vaihtoehto_id, alkio.kysymys_id, kysymysindex, aktiivinenTentti, vaihtoehtoindex)}>
//                   <DeleteIcon style=
//                     {{
//                       color: "grey",
//                       fontSize: 28,
//                       verticalAlign: "middle"
//                     }}>
//                   </DeleteIcon>
//                 </span>
//               </div>)}
//             <div className="lisays"
//               onClick={(e) => uusiVaihtoehto(e, item.kysymys_id, kysymysindex, aktiivinenTentti)}>
//               <AddCircleIcon style=
//                 {{
//                   color: "grey",
//                   fontSize: 28,
//                   verticalAlign: "middle"
//                 }}>
//               </AddCircleIcon>
//             </div>
//             <div {...getRootProps()}>
//         <input {...getInputProps()} />
//         {
//           isDragActive ?
//             <p>Drop the Image here ...</p> :
//             <p>Drag 'n' drop Image here, or click to select Image</p>
//         }
//       </div>
//           </div>)}
//         <div className="lisaaKys"
//         onClick={(e) => uusiKysymys(e,props.data[aktiivinenTentti].tentti_id, aktiivinenTentti)}>
//           <AddCircleIcon style=
//             {{
//               color: "grey",
//               fontSize: 28,
//               verticalAlign: "middle",
//               textAlign: "center"
//             }}>
//           </AddCircleIcon>
//         </div>
//       </div>
//     </div>
//   </div>
// }


// export default ChangeTests;
