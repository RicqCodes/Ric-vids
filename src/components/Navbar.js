import React from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ onTermSubmit }) => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo-container">
          <div className="logo">Ric-vids</div>
          <div className="location">NG</div>
        </div>
        <SearchBar onTermSubmit={onTermSubmit} />
      </div>
      <div className="line"></div>
    </header>
  );
};

export default Navbar;
