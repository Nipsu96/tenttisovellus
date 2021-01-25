import React from 'react';
import '../App.css';

function ShowAnswers(props,vastausindex) {

  
 
      return (<div>
        {props.vaihtoehdot.map((alkio, vastausindex,index,tenttiindex) => 
        <div  key={vastausindex} ><label className="checkbox"><input type="checkbox" checked={alkio.valittu} disabled/><span>{alkio.vastaus_nimi}</span></label><label className="checkboxRightAns" ><input type="checkbox" disabled="disabled" checked={alkio.oikea_vastaus}/><span>{alkio.vastaus_nimi}</span></label></div>)}
        </div>
        
      );
      
  }
  

export default ShowAnswers;
