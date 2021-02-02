import React from 'react';
import '../App.css';
import axios from 'axios';

function AskCard(props) {

  const ChangeAnswer = async (e, vaihtoehtoindex) => {
    try {
      let vastaukset = await axios.get(props.path+"vastaukset")
     
    // jos ei oo dataa, post. jos on dataa, niin muutetaan
    // filtteri???
    if(vastaukset.vaihtoehto_id === props.vaihtoehdot[vaihtoehtoindex].vaihtoehto_id){
      let result = await axios.put(props.path+"vastaukset",{vastaus:e.target.checked ,kysymys_id:props.kysymys_id,vaihtoehto_id:props.vaihtoehdot[vaihtoehtoindex].vaihtoehto_id
    }
      )
    }else{
      let result = await axios.post(props.path+"vastaukset",{vastaus:e.target.checked ,kysymys_id:props.kysymys_id,vaihtoehto_id:props.vaihtoehdot[vaihtoehtoindex].vaihtoehto_id
    }
      )
    }
      
      props.dispatch({ type: "VASTAUS_VALITTU", data: { Answer:e.target.checked , tenttiindex:props.tenttiindex, kysymysindex:props.index, vaihtoehtoindex: vaihtoehtoindex}})
    } catch (exception) {
      alert("Muuttaminen epäonnistui")

    }
  }
  
  return (<div>
    {props.vaihtoehdot.map((alkio, vaihtoehtoindex) =>
      <div key={ vaihtoehtoindex}><label className="checkbox"><input type="checkbox" onChange={(e) => ChangeAnswer(e, vaihtoehtoindex)} checked={alkio.vastaus} /><span>{alkio.vastaus_nimi}</span></label></div>)}
  </div>

  );

}


export default AskCard;
