import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
           <h1>
        <Link to="/snacks">Snacks</Link>
      </h1>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
            
        </nav>
    );
};

export default NavBar;