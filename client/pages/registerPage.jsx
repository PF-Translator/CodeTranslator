import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import './../styles/styles.scss';

const registerPage = () => {
  return (
    <div id='registerPage'>
            <h1> Code Translator Registration </h1>
            <div id='registerBox'>
            <form>
                <input placeholder='Email'></input>
                <input placeholder='Username'></input>
                <input placeholder='Password'></input>
                <div id='selectLanguagesRow'>  
                    <label for='knownLangOptions'>Chooose the language that you know:</label>
                        <select name='knownLangOptions' id='knownLangOptions'>
                            <option value='javascript'> Javascript</option>
                            <option value='python'> Python</option>
                        </select>
                    <label for='learnLangOptions'></label>
                        <select name='learnLangOptions' id='learnLangOptions'>
                            <option value="python" >Python</option>
                            <option value='javascript'> Javascript</option>
                        </select>
                 </div>
                <button> Register</button>
              
            </form>
            </div>
        </div>
  );
}


export default registerPage;