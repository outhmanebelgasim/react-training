import React from "react";
function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="./Home.jsx">Home</a></li>
          <li><a href="./About.jsx">About</a></li>
          <li><a href="./Contact.jsx">Contact</a></li>
          <li><a href="./Services.jsx">Services</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
