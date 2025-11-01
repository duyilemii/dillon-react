import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar header-nav-bar">
      <h1>JOHN DILLON</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dillons">Dillons</NavLink></li>
        <li><NavLink to="/volunteer">Volunteer</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/voting">Voting</NavLink></li>
        <li><a href="#donate" id="nav-donate-link">Donate</a></li>
      </ul>
    </div>
  );
}
