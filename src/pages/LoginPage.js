import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5001/api/login', {
        username: username,
        password: password,
      });

      setMessage(response.data.message);
      
      if (response.status === 200) {
        // Store login status (simple example using localStorage, JWT is better)
        localStorage.setItem('userLoggedIn', 'true'); 
        localStorage.setItem('username', username); // Store username if needed
        
        setTimeout(() => {
          navigate('/states'); // Redirect to the states page
        }, 500); 
      }

    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(`Error: ${error.response.data.message}`);
      } else {
        setMessage('Login failed. Please try again.');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        {message && <p className={`message ${message.startsWith('Error:') ? 'error' : 'success'}`}>{message}</p>}
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;