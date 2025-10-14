import logo from './logo.svg';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';

import TreeView from 'devextreme-react/tree-view';
import config from 'devextreme/core/config'; 
import { licenseKey } from './devextreme-license'; 
config({ licenseKey });

function App() {

  const navigation =
    [
      {
        id: '1',
        text: 'ITEMS',
        expanded: true,
        items: [
          {
            id: '1_1',
            text: 'ITEMS 21',
            expanded: true,
          },
          {
            id: '1_2',
            text: 'ITEMS 22',
            expanded: true,
          },
        ]
      }
    ]

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <div>
        <TreeView dataSource={navigation} selectionMode="single" selectByClick={true}/>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="//*" element={<Home />} /> {/* Hack Siemens Server su redirect forzato a pagina personalizzata su root */}
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
