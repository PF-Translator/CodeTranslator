import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import './../styles/styles.scss'





const loginPage = (props) => {

 // login procedure
    function login(){

    // send post request with data
        fetch('db/login', {
            method: 'POST',
            'Content-Type': 'application/json',
            body : JSON.stringify({ username: document.getElementById('username').value, password: document.getElementById('password').value }),
        })
        .then(res => res.json())
        .then(data => {
            // update state with the response 

            if(data.status != 200){

            }
            console.log(data);
            props.setState({
                ...data
            })
        })
        .catch(error =>{
            console.log(error);

        })
        

    }

    /* 
    {
        userId:
        learnLanguage:
        learnLanguageTable:
        knownLanguage:
        knownLanguageTable:
    }
    */


    return (
        <div id='loginPage'>
            <h1> Code Translator </h1>
            <div id='loginBox'>
            <form>
                <input id='username' placeholder='Username'></input>
                <input id='password' placeholder='Password'></input>
                <Link to='/main' ><button onClick={login}> Login</button></Link>       
                <p>Don't have an account? <Link to='/register'> Register here!</Link></p>
            </form>
            </div>
            <div id='loginconfirmation'></div>
        </div>
    );
};

export default loginPage;
