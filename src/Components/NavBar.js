import React from 'react';

const NavBar = () => {
    return (
        <nav>
           <h1>
        <Link to="/bookmarks">Bookmarks</Link>
      </h1>
      <button>
        <Link to="/bookmarks/new">New Bookmark</Link>
      </button>
            
        </nav>
    );
};

export default NavBar;