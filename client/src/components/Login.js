import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';



function Login(props) {
    const [userData, setUserData] = useState({
        email: '',
        salasana: '',
    })
    //katso tätä tarkemmin
    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const doSubmit = async (e) => {
        e.preventDefault()
        try {
            let token = null
            token = await axios.post(props.path + "login", userData)
            console.log("Kirjautuminen onnistui")
            console.log(token.data.token)
            window.localStorage.setItem("token", (token.data.token))
            window.location.href = props.client +"tests"

        } catch (e) {
            console.log("Kirjautuminen epäonnistui", e)
        }
    }

    return <div className="main">
        <div className="register">
            <h2 className="register_title">Kirjaudu sisään</h2>
            <form  onSubmit={e => doSubmit(e)}>
                <label htmlFor="email">Sähköposti: </label>
                <input type="email" id="email" name="email" placeholder="Sähköposti" value={userData.email}
                    onChange={onChange}></input><br />
                <label htmlFor="password">Salasana: </label>
                <input type="password" id="password" name="salasana" placeholder="Salasana" value={userData.salasana}
                    onChange={onChange}></input><br />
                <input type="submit" id="submitbutton" value="Kirjaudu sisään" />
            </form>
        </div>
    </div>
}



export default Login;