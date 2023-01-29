import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link className="nav_index" to="/snacks">
          Snacks baby!
        </Link>
      </h1>
      <button>
        <Link to="/snacks/new">Add a yummy!</Link>
      </button>
    </nav>
  );
}
