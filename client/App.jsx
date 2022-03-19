import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { render } from 'react-dom';
import LoginPage from './pages/loginPage.jsx'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>


            </Routes>

        </Router>
    );
};

export default App;
