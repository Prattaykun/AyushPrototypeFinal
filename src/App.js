import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import RegistrationForm1 from "./components/Registration/RegistrationForm1";
import { Routes, Route, useNavigate,useLocation } from "react-router-dom";
import RegistrationForm2 from "./components/Registration/RegistrationForm2";
import RegistrationForm3 from "./components/Registration/RegistrationForm3";
import Home from "./components/Home/HomePage";
import ChatBoticon from "./components/ChatBotIcon/ChatBotIcon";
import { Link } from "react-router-dom";
import Logo from "./components/Assets/favicon.png";
import TrackApplication from "./components/TrackApplication/TrackApplication"; // Ensure this is the correct path
import Eligibility from "./components/menu/Eligibility";
import Feedback from "./components/menu/Feedback";
import policy from "./components/menu/policy";
import RoleSelect from "./components/RoleSelect/RoleSelect";
import Admin from "./components/Admin/Admin";
import LogSignGov from "./components/LoginSignup/LogSignGov";
import GovLoadScreen from "./components/LoginSignup/GovLoadScreen";
import LogSignStake from "./components/LoginSignup/LogSignStake";
import LogAdmin from "./components/LoginSignup/LogAdmin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app,auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";

import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
// import Feedback from "./components/menu/Feedback";

// const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const navigate = useNavigate(); // useNavigate for navigation
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const roleDoc = await getDoc(doc(db, 'roles', currentUser.uid));
        if (roleDoc.exists()) {
          setRole(roleDoc.data().role);
        }

        // Navigate to the dashboard only if the current route is "/LoginSignup"
        if (location.pathname === "/LoginSignup") {
          navigate("/Dashboard");
        }
      } else {
        setUser(null);
        setRole(null);

        // Navigate to RoleSelect only if not already on the allowed routes
        const allowedPaths = [
          "/", "/LoginSignup", "/Eligibility", "/Feedback", "/RoleSelect",
          "/LogSignGov", "/LogSignStake", "/LogAdmin", "/Admin", "/GovLoadScreen"
        ];
        if (!allowedPaths.includes(location.pathname)) {
          navigate("/RoleSelect");
        }

        console.log("You are Logged Out!");
      }
    });

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
        role === 'startup' ? (
          <Link to="/Dashboard" className="nav-link">Dashboard</Link>
        ) : role === 'govtofficial' ? (
          <Link to="/GovDashboard" className="nav-link">Government Dashboard</Link>
        ) : null
      ) : (
        <Link to="/RoleSelect" className="nav-link">Login/Signup</Link>
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
                <Link to="/Feedback" className="menu-item">Feedback</Link>
                 <Link to="/Eligibility" className="menu-item">Eligibility</Link>

              </div>
            )}
          </div>
        </div>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/Eligibility" element={<ProtectedRoute><Eligibility /></ProtectedRoute>} />
        <Route path="/Feedback" element={<ProtectedRoute><Feedback/></ProtectedRoute>} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/LogSignGov" element={<LogSignGov />} />
        <Route path="/GovLoadScreen" element={<GovLoadScreen />} />
        <Route path="/LogSignStake" element={<LogSignStake />} />
        <Route path="/LogAdmin" element={<LogAdmin />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/RoleSelect" element={<RoleSelect/>} />
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
