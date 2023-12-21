import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className='navbar'>
                <h2>FARAJA LEASING ENTERPRISES</h2>
                <Link to="/">Home</Link>
                <Link to="/Monitors">Monitors</Link>
                <Link to="/Systemunits">System units</Link>
                <Link to="/Keyboards">Keyboards</Link>
                <Link to="/Login">Login</Link>
                
            </nav>
            <hr></hr>
        </React.Fragment>
    );
};

export default Navbar;