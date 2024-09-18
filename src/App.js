import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import RegistrationForm1 from "./components/Registration/RegistrationForm1";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import RegistrationForm2 from "./components/Registration/RegistrationForm2";
import RegistrationForm3 from "./components/Registration/RegistrationForm3";
import Home from "./components/Home/HomePage";
import ChatBoticon from "./components/ChatBotIcon/ChatBotIcon";
import { Link } from "react-router-dom";
import Logo from "./components/Assets/favicon.png";
import TrackApplication from "./components/TrackApplication/TrackApplication";
import Eligiblity from "./components/menu/Eligiblity";
import feedback from "./components/menu/feedback";
import policy from "./components/menu/policy";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // useNavigate for navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is logged in, navigate to Dashboard
        setUser(currentUser);
        navigate("/Dashboard");
      } else {
        // User is logged out, navigate to LoginSignup
        setUser(null);
        console.log("You are Logged Out!");
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [navigate]); // Added navigate as a dependency

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
   };


  return (
    <div className="App">
      <header className="header-main">
        <div>
          <img src={Logo} alt="Logo Icon" className="logo-img" />
        </div>
        <div className="navbar-main">
          <h1>Ministry of AYUSH - Startup Initiative</h1>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            {user ? (
              <Link to="/Dashboard" className="nav-link">Dashboard</Link>
            ) : (
              <Link to="/LoginSignup" className="nav-link">Login/Signup</Link>
            )}
          </nav>
          <div className="menu-container">
            <button className="menu-button" onClick={toggleMenu}>
              Menu
            </button>
            {menuOpen && (
              <div className="menu-dropdown">
                <Link to="/policy" className="menu-item">
                  Policy and Guidelines
                </Link>
                <Link to="/" className="menu-item">
                  Home
                </Link>
                <Link to="/LoginSignup" className="menu-item">
                  Login/Signup
                </Link>
                {/* <Link to="/Dashboard" className="menu-item">
                  Dashboard
                </Link>
                <Link to="/TrackApplication" className="menu-item">
                  Track Application
                </Link> */}
                <Link to="/Eligiblity" className="menu-item">
                  Eligiblity
                </Link>
                <Link to="/feedback" className="menu-item">
                  Feedback
                </Link>
              </div>
            )}
          </div>
        
        </div>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/RegistrationForm1" element={<RegistrationForm1 />} />
        <Route path="/RegistrationForm2" element={<RegistrationForm2 />} />
        <Route path="/RegistrationForm3" element={<RegistrationForm3 />} />
        <Route path="/TrackApplication" element={<TrackApplication />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2024 Ayush Ministry. All rights reserved.</p>
      </footer>
      <ChatBoticon />
    </div>
  );
}

export default App;
