import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/">Do It Already</Link>
      </h1>
      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
