
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Stock from './pages/Stock';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
<div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
