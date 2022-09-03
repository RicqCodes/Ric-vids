import React from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ onTermSubmit }) => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">Ric-vids</div>
        <SearchBar onTermSubmit={onTermSubmit} />
      </div>
      <div className="line"></div>
    </header>
  );
};

export default Navbar;
