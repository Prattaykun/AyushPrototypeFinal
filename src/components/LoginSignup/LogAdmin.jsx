import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LogAdmin.module.css';

const LogAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (username === 'Admin' && password === 'Ayush007') {
      navigate('/Admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles['submit-container']}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.Login}>Login</button>
      </form>
    </div>
  );
};

export default LogAdmin;