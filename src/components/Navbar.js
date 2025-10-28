// src/components/Navbar.js
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation
  // Check if the user is logged in by looking at localStorage
  const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true'; 

  const handleLogout = () => {
    // Clear login status from localStorage
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('username'); // Remove username too if you stored it
    // Redirect to login page
    navigate('/login');
    // Optional: Force a re-render or page reload if needed, though navigate usually suffices
    // window.location.reload(); 
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        India Culture Explorer 🇮🇳
      </Link>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')} end>Home</NavLink>
        </li>

        {/* Show Explore States only if logged in */}
        {isLoggedIn && (
          <li> 
            <NavLink to="/states" className={({ isActive }) => (isActive ? 'active-link' : '')}>Explore States</NavLink>
          </li>
        )}

        {/* --- Conditional Links --- */}
        {!isLoggedIn ? (
          // If NOT logged in, show Login and Register
          <> 
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>Login</NavLink>
            </li>
             <li>
              <NavLink to="/register" className={({ isActive }) => (isActive ? 'active-link' : '')}>Register</NavLink>
            </li>
          </>
        ) : (
          // If logged in, show Logout
          <li>
            {/* Use a button or styled link for Logout */}
            <button onClick={handleLogout} className="logout-button">Logout</button> 
          </li>
        )}
        {/* --- End Conditional Links --- */}

      </ul>
    </nav>
  );
};

export default Navbar;