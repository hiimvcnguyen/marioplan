import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedoutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-warpper gray darken-1">
      <div className="container">
        <Link to="/" className="branch-logo">MarioPlan</Link>
        <SignedInLinks />
        <SignedoutLinks />
      </div>
    </nav>
  )
}

export default Navbar;