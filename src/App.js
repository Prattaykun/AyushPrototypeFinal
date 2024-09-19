import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import RegistrationForm1 from "./components/Registration/RegistrationForm1";
import { BrowserRouter as Router, Routes, Route, useNavigate,useLocation } from "react-router-dom";
import RegistrationForm2 from "./components/Registration/RegistrationForm2";
import RegistrationForm3 from "./components/Registration/RegistrationForm3";
import Home from "./components/Home/HomePage";
import ChatBoticon from "./components/ChatBotIcon/ChatBotIcon";
import { Link } from "react-router-dom";
import Logo from "./components/Assets/favicon.png";
import TrackApplication from "./components/TrackApplication/TrackApplication"; // Ensure this is the correct path
import Eligibility from "./components/menu/Eligibility";
import feedback from "./components/menu/feedback";
import policy from "./components/menu/policy";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import Feedback from "./components/menu/feedback";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // useNavigate for navigation
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // Only navigate to dashboard if not already on a protected route
        if (location.pathname === "/" || location.pathname === "/LoginSignup") {
          navigate("/Dashboard");
        }
      } else {
        // If logged out, navigate to LoginSignup
        setUser(null);
        if (location.pathname !== "/LoginSignup") {
          navigate("/LoginSignup");
        }
        console.log("You are Logged Out!");
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [navigate, location.pathname]); // Added location.pathname as a dependency


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
                <Link to="/Eligibility" className="menu-item">
                  Eligibility
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
        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/Eligibility" element={<Eligibility />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/RegistrationForm1" element={<ProtectedRoute><RegistrationForm1 /></ProtectedRoute>} />
        <Route path="/RegistrationForm2" element={<ProtectedRoute><RegistrationForm2 /></ProtectedRoute>} />
        <Route path="/RegistrationForm3" element={<ProtectedRoute><RegistrationForm3 /></ProtectedRoute>} />
        <Route path="/TrackApplication" element={<ProtectedRoute><TrackApplication /></ProtectedRoute>} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2024 Ayush Ministry. All rights reserved.</p>
      </footer>
      <ChatBoticon />
    </div>
  );
}

export default App;
