import React from 'react';
import { useNavigate } from 'react-router-dom';

const settingsPage = (e) => {
    const navigate = useNavigate();

    function deleteUser(e) {
        e.preventDefault();

        const user = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };

        fetch('api/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(()=> {
            navigate('/');

        }).catch(error =>{
            console.log(error);
            
        })
        
    }

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