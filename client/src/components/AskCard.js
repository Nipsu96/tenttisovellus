import React from 'react';
import '../App.css';
import axios from 'axios';

function AskCard(props) {

  const ChangeAnswer = async (e, vaihtoehtoindex) => {
    console.log("HeiHei",props.vaihtoehdot[vaihtoehtoindex].vaihtoehto_id)
    try {
      let vastaukset = await axios.get("http://localhost:3005/vastaukset")

    // jos ei oo dataa, post. jos on dataa, niin muutetaan
    // filtteri???
    if(vastaukset.vaihtoehto_id === props.vaihtoehdot[vaihtoehtoindex].vaihtoehto_id){
      let result = await axios.put("http://localhost:3005/vastaukset",{vastaus:e.target.checked ,kysymys_id:props.kysymys_id,vaihtoehto_id:props.vaihtoehdot[vaihtoehtoindex].vaihtoehto_id
    }
      )
    }else{
      let result = await axios.post("http://localhost:3005/vastaukset",{vastaus:e.target.checked ,kysymys_id:props.kysymys_id,vaihtoehto_id:props.vaihtoehdot[vaihtoehtoindex].vaihtoehto_id
    }
      )
    }
      
      props.dispatch({ type: "VASTAUS_VALITTU", data: { Answer:e.target.checked , tenttiindex:props.tenttiindex, kysymysindex:props.index, vaihtoehtoindex: vaihtoehtoindex}})
      console.log(props.vastaus)
    } catch (exception) {
      alert("Muuttaminen epäonnistui")
      console.log(props.vastaus)
    }
  }
  
  return (<div>
    {props.vaihtoehdot.map((alkio, vaihtoehtoindex) =>
      <div key={ vaihtoehtoindex}><label className="checkbox"><input type="checkbox" onChange={(e) => ChangeAnswer(e, vaihtoehtoindex)} checked={alkio.vastaus} /><span>{alkio.vastaus_nimi}</span></label></div>)}
  </div>

  );

}


export default AskCard;
