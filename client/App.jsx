import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { render } from 'react-dom';
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage />} />

            </Routes>

        </Router>
    );
};

export default App;
