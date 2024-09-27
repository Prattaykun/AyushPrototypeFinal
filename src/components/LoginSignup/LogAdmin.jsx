import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import "./LogAdmin.css";

const auth = getAuth(app);

const LogAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/Admin");
      })
      .catch((error) => {
        alert("Invalid credentials");
      });
  };

  return (
    <div className="submit_container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="admin_input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required // Ensures the field is filled
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="admin_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Ensures the field is filled
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LogAdmin;
