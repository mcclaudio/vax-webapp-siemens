import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../../App.css';

function Header({ toggleMenu }) {
  return (
    <header className="header">
      <FaBars className="hamburger-icon" onClick={toggleMenu} />
      <div style={ { display: "flex",  width:"100%", justifyContent: "space-between", alignItems: 'center' }}>
        <h1 className="app-name">NovaX</h1>
        <img src="/awp/STLA_BIG.svg" alt="Logo Aziendale" className="logo" />
      </div>

    </header>
  );
}

export default Header;
