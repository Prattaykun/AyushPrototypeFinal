import React, { useState } from "react";
// import logo_icon from "./ayushlogo.jpg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import RegistrationForm1 from "./components/Registration/RegistrationForm1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm2 from "./components/Registration/RegistrationForm2";
import RegistrationForm3 from "./components/Registration/RegistrationForm3";
import Home from "./components/Home/HomePage";
import ChatBoticon from "./components/ChatBotIcon/ChatBotIcon";
import { Link } from "react-router-dom";
import Logo from "./components/Assets/favicon.png";
import TrackApplication from "./components/TrackApplication/TrackApplication";
// import { Alert } from 'react-alert'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="header-main">
        <div className="">
          <img src={Logo} alt="Logo Icon" className="logo-img" />
        </div>
        <div className="navbar-main">
          <h1>Ministry of AYUSH - Startup Initiative</h1>

          <nav>
            <Link to="/" className="nav-link">
              <>Home</>
            </Link>
            <Link to="/LoginSignup" className="nav-link">
              <>Login/Signup</>
            </Link>
          </nav>
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
