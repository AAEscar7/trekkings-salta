import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './pages/Home';
import Senderos from './pages/Senderos';
import Contacto from './pages/Contacto';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/senderos" element={<Senderos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}