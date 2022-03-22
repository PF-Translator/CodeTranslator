import React from 'react';
import { useNavigate } from 'react-router-dom';

//------------------------------------------------------------------USER SETTINGS PAGE-----------------------------------------------------------------
const settingsPage = (e) => {
    //declare navigate to use when we need to redirect to different react route
    const navigate = useNavigate();

    //function to handle deleting user and sending DELETE request
    function deleteUser(e) {
        //prevent refresh of page on click
        e.preventDefault();

        //setup req.body for how backend wants to recieve it
        const user = {
            //grab data from input fields on DOM
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };
        //deleting a user from the information supplied above
        fetch('api/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        //sending the user back to login page after deletion
        }).then(()=> {
            navigate('/');

        }).catch(error =>{
            console.log(error);
            
        })
        
    }

    //rendering settings page
    return (
        <div id='settingsPage'>
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
                <form id='loginInputs'>
                    <input id='username' placeholder='Username'></input>
                    <input id='password' placeholder='Password'></input>
                </form>
                <button onClick={deleteUser} >Delete Account</button>
        </div>
    );
};

export default settingsPage;