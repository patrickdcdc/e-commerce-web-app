import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import General from './Home';
import Systemunits from './System-units';
import Monitors from './Monitors';
import Keyboards from './Keyboards';
import Navbar from './Navbar';
import Login from './Login';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<General />} />
                <Route path='/systemunits' exact element={<Systemunits />} />
                <Route path='/monitors' exact element={<Monitors />} />
          <Route path='/keyboards' exact element={<Keyboards />} />
          <Route path='/login' exact element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;