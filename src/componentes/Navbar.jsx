import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <img src="/Icono_trekking.png" alt="Icono Salta Trekking" className="logo-icono" />
        <span className="logo-texto">Salta Trekking</span>
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Inicio / Clima</Link></li>
        <li><Link to="/senderos">Senderos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}