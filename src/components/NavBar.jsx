// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";

// export default function NavBar() {
//   return (
//     <div className="nav-bar header-nav-bar">
//       <h1>JOHN DILLON</h1>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/dillons">Dillons</NavLink></li>
//         <li><NavLink to="/volunteer">Volunteer</NavLink></li>
//         <li><NavLink to="/events">Events</NavLink></li>
//         <li><NavLink to="/voting">Voting</NavLink></li>
//         <li><a href="#donate" id="nav-donate-link">Donate</a></li>
//       </ul>
//       <div className="hamburger">
//         ☰
//       </div>

//       <ul className="menu-bar-links">
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/dillons">Dillons</NavLink></li>
//         <li><NavLink to="/volunteer">Volunteer</NavLink></li>
//         <li><NavLink to="/events">Events</NavLink></li>
//         <li><NavLink to="/voting">Voting</NavLink></li>
//         <li><a href="#donate" id="nav-donate-link">Donate</a></li>
//       </ul>
//     </div>
//   );
// }






import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

/**
 * NavBar - responsive navigation with mobile hamburger
 *
 * Usage: replace your existing NavBar with this component.
 */

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click-outside to close (pointerdown is more reliable)
  useEffect(() => {
    function onPointerDown(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("pointerdown", onPointerDown);
      return () => document.removeEventListener("pointerdown", onPointerDown);
    }
  }, [open]);

  // Close menu on navigation (good for SPA)
  const handleLinkClick = () => setOpen(false);

  return (
    <header className="site-nav" role="navigation" aria-label="Main Navigation" ref={rootRef}>
      <div className="nav-inner">
        <div className="nav-left">
          <NavLink to="/" className="logo" onClick={handleLinkClick} aria-label="Dillon Campaign home">
            JOHN DILLON
          </NavLink>
        </div>

        {/* Desktop links */}
        <nav className="links desktop-links" aria-label="Primary navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
          <NavLink to="/dillons" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Dillons</NavLink>
          <NavLink to="/volunteer" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Volunteer</NavLink>
          <NavLink to="/events" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Events</NavLink>
          <NavLink to="/voting" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Voting</NavLink>
          <NavLink to="/donate" className="btn-primary nav-donate">Donate</NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation(); // avoid pointerdown race
            setOpen((s) => !s);
          }}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" className="hamburger">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <nav
        id="mobile-navigation"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")} onClick={handleLinkClick}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/dillons" className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")} onClick={handleLinkClick}>Dillons</NavLink>
          </li>
          <li>
            <NavLink to="/volunteer" className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")} onClick={handleLinkClick}>Volunteer</NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")} onClick={handleLinkClick}>Events</NavLink>
          </li>
          <li>
            <NavLink to="/voting" className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")} onClick={handleLinkClick}>Voting</NavLink>
          </li>
          <li>
            <NavLink to="/donate" className="btn-primary mobile-donate" onClick={handleLinkClick}>Donate</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

