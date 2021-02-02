import React, {useState } from 'react';
import '../App.css';
import AskCard from './AskCard';
import ShowAnswers from './ShowAnswer';

function Tentit(props)
{

  const [palautus, setPalautus] = useState(false)
  const [aktiivinenTentti, setAktiivinenTentti] = useState(0)
 
  const naytaVastaukset = ( kysymysindex,tenttiindex) => {
    setPalautus(true)
  }

  const vaihdaTentti = (tentti_id) => {
    setAktiivinenTentti(tentti_id)
  }


  return <div className="main">
  {props.data.map((tentti,index)=><button className="TenttiButton"key={index} onClick={()=>vaihdaTentti(index)}>{tentti.tentin_nimi}</button>)}
  <div className="askCards">
  {palautus === false ? props.data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" >{item.kysymys_nimi}</div>
      {item.vaihtoehdot && <AskCard path ={props.path}index={index} tenttiindex={aktiivinenTentti} kysymys_id={item.kysymys_id}vaihtoehdot={item.vaihtoehdot} dispatch={props.dispatch}></AskCard> }
    </div>)
      :
      props.data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" >{item.kysymys_nimi}</div>
        {item.vaihtoehdot &&<ShowAnswers path ={props.path} index={index} valittu={props.data.valittu}vaihtoehdot={item.vaihtoehdot} dispatch={props.dispatch}></ShowAnswers>}
      </div>)}
    <button className="showbutton" onClick={(index)=>{naytaVastaukset(index,aktiivinenTentti)}}>Näytä Vastaukset</button>
  </div>
</div>
}



export default Tentit;