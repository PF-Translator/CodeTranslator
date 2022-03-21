import React from 'react';
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

import './../styles/styles.scss'





const loginPage = (props) => {

 // login procedure
     function login() {

        const loginInfo = { 
            username: document.getElementById('username').value, 
            password: document.getElementById('password').value
        }

    // send post request with data
        fetch('api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(loginInfo),
        })
        .then(res => {
            if(res.status !== 200){
                    throw new Error('invalid login')
            }
            return res.json()
        })
        .then( (data) =>  {
            // update state with the response 
    

            //try later when accessing state 
            // props.setState({
            //     ...data
            // })
            
            props.state.isLoggedIn = true;
            props.state.user_id = data.user_id;
            props.state.learn_language = data.learn_language;
            props.state.learn_languageTable = data.learn_languageTable;
            props.state.known_language = data.known_language;
            props.state.known_languageTable = data.known_languageTable;

            console.log(props.state)
            
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
    if(props.state.isLoggedIn){
        // return(
        //     <Redirect to='/main'/> 
        // )

        navigate = useNavigate();
        navigate('/main');
    }

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

// function BooksList () {

//     const [books, updateBooks] = React.useState([]);
 
  
 
//     React.useEffect(function effectFunction() {
 
//         fetch('https://the-fake-harry-potter-api.com/books')
 
//             .then(response => response.json())
 
//             .then(({ data: books }) => {
 
//                 updateBooks(books);
 
//             });
 
//     }, []);

// return (

//     <ul>
 
//         books.map(book => (
 
//          <li key={book.id}>{book.name}</li>  
 
//         ));
 
//     </ul>
 
//     );
 
//  }