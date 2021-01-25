import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tentit from './components/Tests';
import ChangeTests from './components/Modify';
import Register from './components/Register';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';



function reducer(state, action) {
  let syvakopio = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'VASTAUS_VALITTU':
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot[action.data.vaihtoehtoindex].valittu = action.data.Answer;
      return syvakopio
    case 'OIKEA_VASTAUS':
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot[action.data.vaihtoehtoindex].oikea_vastaus = action.data.newRightAnswer;
      return syvakopio
    case 'VASTAUS_MUUTTUI':
      console.log("Ollaan vastaus muuttui",action.data.newAnswer )
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot[action.data.vaihtoehtoindex].vastaus_nimi = action.data.newAnswer
      return syvakopio
    case 'KYSYMYS_MUUTTUI':
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].kysymys_nimi = action.data.newQuestion;
      return syvakopio
    case 'LISAA_KYSYMYS':
      console.log("ollaan lisää kysymys:", action.data.newQuestion)
      let lisaakysymys = syvakopio[action.data.tenttiindex].kysymykset
      let uusikysymys = action.data.newQuestion
      lisaakysymys.push(uusikysymys)
      syvakopio[action.data.tenttiindex].kysymykset = lisaakysymys
      return syvakopio
    case 'LISAA_VASTAUS':
      console.log("ollaan lisää vastaus:", action.data.newAnswer)
      let lisaavastaus = syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot
      let uusivastaus = action.data.newAnswer
      lisaavastaus.push(uusivastaus)
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot = lisaavastaus
      return syvakopio
    case 'POISTA_VASTAUS':
      console.log("Ollaan poista vastaus:", action.data.vaihtoehtoindex)
      let poistavastaus = syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot
      console.log("Splice ei tehty:", syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot)
      poistavastaus.splice([action.data.vaihtoehtoindex], 1)
      console.log("Splice tehty:", poistavastaus)
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot = poistavastaus
      return syvakopio

    case 'POISTA_KYSYMYS':
      let poistakysymys = syvakopio[action.data.tenttiindex].kysymykset
      console.log("Splice ei tehty:", syvakopio[action.data.tenttiindex].kysymykset)
      poistakysymys.splice([action.data.kysymysindex], 1)
      console.log("Splice tehty:", poistakysymys)
      syvakopio[action.data.tenttiindex].kysymykset = poistakysymys
      return syvakopio
    case 'INIT_DATA':
      return action.data
    default:
      throw new Error();
  }
}



function App(props) {

  const [dataAlustettu, setDataAlustettu] = useState(false)
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {

    const createData = async () => {

      try {
        let result = await axios.get("http://localhost:3005/tentit")
        dispatch({ type: "INIT_DATA", data: result.data })
        setDataAlustettu(true)
      } catch (exception) {
        alert("Tietokannan alustaminen epäonnistui")
      }
    }

    const fetchData = async () => {
      try {
        let result = await axios.get("http://localhost:3005/tentit")

        if (result.data.length > 0) {
          for (var i = 0; i < result.data.length; i++) {
            result.data[i].kyselyt = []
            let kysymykset = await axios.get("http://localhost:3005/kysymykset/" + result.data[i].tentti_id)
            result.data[i].kysymykset = kysymykset.data

            if (result.data[i].kysymykset.length > 0) {
              for (var j = 0; j < result.data[i].kysymykset.length; j++) {
                result.data[i].kysymykset[j].vaihtoehdot = []
                let vaihtoehdot = await axios.get("http://localhost:3005/vastausvaihtoehdot/" + result.data[i].kysymykset[j].kysymys_id)
                result.data[i].kysymykset[j].vaihtoehdot = vaihtoehdot.data
              }
            }
          }
          dispatch({ type: "INIT_DATA", data: result.data })
          setDataAlustettu(true)
        } else {
          throw ("Nyt pitää data kyllä alustaa!")
        }
      }
      catch (exception) {
        createData();
      }
    }
    fetchData();
  }, [])
  useEffect(() => {

    // const updateData = async () => {
    //   try {
    //     let result = await axios.put("http://localhost:3005/users", state)
    //   } catch (exception) {
    //     console.log("Datan päivitys ei onnistunut")
    //   }
    //   finally {

    //   }
    // }
    // if (dataAlustettu) {
    //   updateData();
    // }
  }, [state])
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/tests" className="active" ><FormattedMessage id="tests" /></Link></li>
            <li><Link to="/about"><FormattedMessage id="about"
            /></Link></li>
            <li><Link to="/admin"><FormattedMessage id="modify"
            /></Link></li>
            <li><Link to="/register"><FormattedMessage id="register"
            /></Link></li>
            <li><Link to="/login"><FormattedMessage id="login"
            /></Link></li>
            <li><FormattedMessage id="Language" /></li>
          </ul>
        </header>
        <Switch>
          <Route path="/tests">
            {state.length > 0 ? <Tentit data={state} dispatch={dispatch} /> : "Tietoa haetaan"}
          </Route>
          <Route path="/admin">
            {state.length > 0 ? <ChangeTests data={state} dispatch={dispatch} /> : "Tietoa haetaan"}
          </Route>
          <Route path="/register">
            {state.length > 0 ? <Register /> : "Tietoa haetaan"}
          </Route>
        </Switch>
      </div></Router>
  );
}
export default App;

