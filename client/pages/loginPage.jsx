import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import './../styles/styles.scss'




const loginPage = () => {
    return (
        <div id='loginPage'>
            <h1> Code Translator </h1>
            <div id='loginBox'>
            <form>
                <input placeholder='Username'></input>
                <input placeholder='Password'></input>
                <button> Login</button>
                <p>Don't have an account? <Link to='/register'> Register here!</Link></p>
            </form>
            </div>
        </div>
    );
};

export default loginPage;
