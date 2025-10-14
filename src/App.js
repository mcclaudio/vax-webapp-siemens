import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import './App.css';
import 'devextreme/dist/css/dx.light.css';

import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';


import Header from './compnents/layouts/Header';
import Sidebar from './compnents/layouts/Sidebar';
import Footer from './compnents/layouts/Footer';
import Items21 from './pages/vax/items/Items21'
import Items23 from './pages/vax/items/Items23'
import config from 'devextreme/core/config';

import { licenseKey } from './devextreme-license';
config({ licenseKey });

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="app-container">
      <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
      <div className="page-body">
        <Sidebar isOpen={menuOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="//*" element={<Home />} /> {/* Hack Siemens Server su redirect forzato a pagina personalizzata su root */}
            <Route path="/vax/items21" element={<Items21 />} />
            <Route path="/vax/items23" element={<Items23 />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );

}

export default App;
