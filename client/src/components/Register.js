import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';



function Register(props) {
    const [userData, setUserData] = useState({
        etunimi: '',
        sukunimi: '',
        email: '',
        salasana: '',
        onko_opettaja: 'false'
    })
    //katso tätä tarkemmin
    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const onChangeCheckbox = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.checked })
    }
    const doSubmit = async (e) => {
        e.preventDefault()
        /*  const user = {
             first_name:firstName,
             last_name: lastName,
             email: email,
             password: password
         } */
        try {
            await axios.post(props.path+"users", userData)
            console.log("Rekisteröinti Onnistui!")
        } catch (e) {
            console.log("registration error",e)
        }
    }

    return <div className="main">
        <div className="register">
            <h2 className="register_title">Rekisteröidy</h2>
            <form onSubmit={e => doSubmit(e)}>
                <label htmlFor="fname">Etunimi: </label>
                <input type="text" id="fname" name="etunimi" placeholder="Etunimi" value={userData.etunimi} onChange={onChange}></input><br />
                <label htmlFor="lname">Sukunimi: </label>
                <input type="text" id="lname" name="sukunimi" placeholder="Sukunimi" value={userData.sukunimi}
                    onChange={onChange}></input><br />
                <label htmlFor="email">Sähköposti: </label>
                <input type="email" id="email" name="email" placeholder="Sähköposti" value={userData.email}
                    onChange={onChange}></input><br />
                <label htmlFor="password">Salasana: </label>
                <input type="password" id="password" name="salasana" placeholder="Salasana" value={userData.salasana}
                    onChange={onChange}></input><br />
                <label htmlFor="isTeacher">Olen opettaja: </label> 
                <input type="checkbox" id="isTeacher" name="onko_opettaja" value={userData.onko_opettaja}
                    onChange={onChangeCheckbox}></input><br />
                <input type="submit" id="submitbutton" value="Rekisteröidy" />
            </form>
        </div>
    </div>
}



export default Register;