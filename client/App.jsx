import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';


import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import MainPage from './pages/mainPage.jsx';
import SettingsPage from './pages/settingsPage.jsx';


const App = () => {

    const [state, setState ] = useState({
    userId : null,
    learnLanguage : null,
    learnLanguageTable: null,
    knownLanguage: null,
    knownLanguageTable: null
     })
    
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage setState = {setState} />}/>
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/main' element={<MainPage state = {state} />} />
                <Route path='/settings' element={<SettingsPage />} />
            </Routes>

        </Router>
    );
};

export default App;
