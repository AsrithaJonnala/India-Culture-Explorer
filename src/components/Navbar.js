import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        India Culture Explorer 🇮🇳
      </Link>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/states" className={({ isActive }) => (isActive ? 'active-link' : '')}>Explore States</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;