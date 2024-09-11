import React from 'react';

function Header() {
  return (
    <header className="flex-container">
      <img
        src="https://content.codecademy.com/courses/freelance-1/unit-4/img-tea-cozy-logo.png"
        alt="The Tea Cozy Logo"
      />
      <nav>
        <span><a href="#mission">Mission</a></span>
        <span><a href="#store">Featured Tea</a></span>
        <span><a href="#locations">Locations</a></span>
      </nav>
    </header>
  );
}

export default Header;
