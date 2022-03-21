import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import './../styles/styles.scss';

const registerPage = () => {

    function registerUser(){

        const registerInfo = {
                username: document.getElementById('usernameInput').value,
                password: document.getElementById('passwordInput').value,
                known_language: document.getElementById('knownLangOptions').value,
                learn_language: document.getElementById('learnLangOptions').value,
                email: document.getElementById('emailInput').value,
        }

        fetch('/api/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })
    

    }

  return (
    <div id='registerPage'>
            <h1> Code Translator Registration </h1>
            <div id='registerBox'>
            <form id='registerForm'>
                <input id='emailInput' placeholder='Email'></input>
                <input id='usernameInput' placeholder='Username'></input>
                <input id='passwordInput' placeholder='Password'></input>
                <div id='selectLanguagesRow'>  
                    <label >Select the language that you know:</label>
                        <select name='knownLangOptions' id='knownLangOptions'>
                            <option value='javascript'>Javascript</option>
                            <option value='python'>Python</option>
                            <option value='none'>None</option>
                        </select>
                    <label >Select the language you wish to learn: </label>
                        <select name='learnLangOptions' id='learnLangOptions'>
                            <option value="python" >Python</option>
                            <option value='javascript'> Javascript</option>
                        </select>
                 </div>
                
            </form>
            
                            <Link to='/'><button id='registerButton' onClick={registerUser}> Register</button></Link>
         

            </div>
        </div>
  );
}


export default registerPage;