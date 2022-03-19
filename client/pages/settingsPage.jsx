import React from 'react';

const settingsPage = () => {
    return (
        <div>
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
                <button>Delete Account</button>
        </div>
    );
};

export default settingsPage;