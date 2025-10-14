import React from 'react';
import '../../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: 'center' }}>
        <img src="/awp/lan_system_logo.svg" alt="Logo Aziendale" className="logo" />
        <p>© LAN SYSTEM SRL – Via Fraccacreta 31 – 71121 Foggia (Italy)</p>
      </div>

    </footer>
  );
}

export default Footer;
