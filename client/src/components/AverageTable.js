// import React from 'react';
// import '../App.css';
// import axios from 'axios';

// function KeskiArvot(props)
// {

//   const naytaKeskiarvot= async (index) => {
//     console.log("Tässä on keskiarvot")
//     try {
//       let tulokset= await axios.put("http://localhost:3005/tenttitulokset/")
      
//         let result= await axios.get("http://localhost:3005/keskiarvot/")  
//         console.log("Tässä on keskiarvot")
       
//         props.dispatch({ type: "INIT_DATA", data: result.data})
//         Number(result.data.keskiarvo).toFixed(2)
//       } catch (exception) {
//         alert("Keskiarvojen hakeminen epäonnistui")
//       }  
//     // try {
//     //     let result= await axios.get("http://localhost:3005/keskiarvot/")
//     //     console.log("Tässä on keskiarvot")
//     //     props.dispatch({ type: "INIT_DATA", data: result.data })
//     //   } catch (exception) {
//     //     alert("Keskiarvojen hakeminen epäonnistui")
//     //   }  
//   }


//   return <div className="main">
//   <div className="askCards">
//     <button className="showbutton" onClick={(index)=>{naytaKeskiarvot(index)}}>Näytä Keskiarvot</button>
//      <table>
//       <tr>
//         <th>Etunimi</th>
//         <th>Sukunimi</th> 
//         <th>Keskiarvo</th>
//       </tr>
//       {props.data.map((alkio, index) =>
//       <tr>
//       <td>{alkio.etunimi}</td>
//       <td>{alkio.sukunimi}</td>
//         <td>{Number(alkio.keskiarvo).toFixed(1)}</td>
//       </tr>
//    )} </table>
//   </div>
// </div>
// }



// export default KeskiArvot;