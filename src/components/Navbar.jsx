// components/Navbar.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'; // Import Navbar styles

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    // Custom logic before navigation (optional)
    console.log(`Navigating to ${path}`);
    
    // Navigate to the desired path
    navigate(path);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={() => handleClick('/')}>Home</Link>
        </li>
        <li>
          <Link to="/become-a-sponsor" onClick={() => handleClick('/become-a-sponsor')}>Become a Sponsor</Link>
        </li>
        <li>
          <Link to="/event-form" onClick={() => handleClick('/event-form')}>Organize an Event</Link>
        </li>
        <li>
          <Link to="/FAQ" onClick={() => handleClick('/FAQ')}>FAQ</Link>
        </li>
        <li>
          <Link to="/about-us" onClick={() => handleClick('/about-us')}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
