import React from 'react';
import { connect } from 'react-redux'
import { Link, useNavigate , Navigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

import './../styles/styles.scss'



//--------------------------------------------------------Main Login Page----------------------------------------------------------------------
const loginPage = (props) => {
    //declare navigate to use later to navigate to different route when login is verified
    const navigate = useNavigate();

 // login procedure
     function login() {

        //set up body to match what server is expecting in request object
        const loginInfo = { 
            //Grab data from input fields in DOM
            username: document.getElementById('username').value, 
            password: document.getElementById('password').value
        }

    // send post request with data
    // due to how route handler is set up, this will also retrieve data sent from backend such as known and learn language and user info
        fetch('api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(loginInfo),
        })
        .then(res => {
            // If invalid login, then server will send an error status of 401
            if(res.status !== 200){
                    throw new Error('invalid login')
            }
            return res.json()
        })
        .then( (data) =>  {

            // update state with the response 
            props.state.isLoggedIn = true;
            props.state.user_id = data.user_id;
            props.state.learn_language = data.learn_language;
            props.state.learn_languageTable = data.learn_languageTable;
            props.state.known_language = data.known_language;
            props.state.known_languageTable = data.known_languageTable;

            //redirect to main/"quiz" page of app
            navigate('/main');
        })
        .catch(error =>{
            console.log(error); 
        })
    }

    //render login page of application
    return (
        <div id='loginPage'>
            <div>
                <h1> Code Translator </h1>
            </div>
  
            <div id='loginBox'>
            <form id='loginInputs'>
                <input id='username' placeholder='Username'></input>
                <input id='password' placeholder='Password'></input>
                
            </form>
            </div>
            
            <div id='loginActions'>
            <button id='loginButton' onClick={login}> Login</button>
                <p>Don't have an account? <Link to='/register'> Register here!</Link></p>
            </div>
        </div>
    );
};

export default loginPage;