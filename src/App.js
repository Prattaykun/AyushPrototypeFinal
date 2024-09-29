import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"; // Import Axios for API requests
import Dashboard from "./components/Dashboard/Dashboard";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import RegistrationForm1 from "./components/Registration/RegistrationForm1";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import RegistrationForm2 from "./components/Registration/RegistrationForm2";
import RegistrationForm3 from "./components/Registration/RegistrationForm3";
import Home from "./components/Home/HomePage";
import ChatBoticon from "./components/ChatBotIcon/ChatBotIcon";
import ChatPopup from "./components/ChatBotIcon/ChatPopup";
import { Link } from "react-router-dom";
import Logo from "./components/Assets/favicon.png";
import TrackApplication from "./components/TrackApplication/TrackApplication"; // Ensure this is the correct path
import Eligibility from "./components/menu/Eligibility";
import Feedback from "./components/menu/Feedback";
import PolicyGuidline from "./components/menu/PolicyGuideline";
import RoleSelect from "./components/RoleSelect/RoleSelect";
import Admin from "./components/Admin/Admin";
import GovDashboard from "./components/Dashboard/GovDashboard";
import ApplicationsGov from "./components/Dashboard/ApplicationsGov";
import Notices from "./components/menu/Notices";
import LogSignGov from "./components/LoginSignup/LogSignGov";
import GovLoadScreen from "./components/LoginSignup/GovLoadScreen";
import LogSignStake from "./components/LoginSignup/LogSignStake";
import LogAdmin from "./components/LoginSignup/LogAdmin";
import StakeDashboard from "./components/Dashboard/StakeDashboard";
import AboutUs from "./components/menu/AboutUs";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app, auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";
import menuicon from "./components/Assets/menu.png";
import Schemes from "./components/menu/Schemes";


import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
// import Feedback from "./components/menu/Feedback";
import FAQ from "./components/menu/FAQ";

// const auth = getAuth(app);

function App() {
  const [translated, setTranslated] = useState(false); // Track translation state
  const [translatedContent, setTranslatedContent] = useState(null); // Hold translated text

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const [chatVisible, setChatVisible] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const toggleChatbot = () => {
    // setIsOpen(!isOpen);
    setChatVisible(!chatVisible);
  };

  // Function to translate the content of the homepage
  const translateToHindi = async () => {
    try {
      const textToTranslate = document.querySelector(".main-content").innerText;

      // Fetch request as per the example you provided
      const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: textToTranslate,
          source: "en",
          target: "hi"
        }),
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();
      setTranslatedContent(data.translatedText);
      setTranslated(true);
    } catch (error) {
      console.error("Error during translation:", error);
    }
  };

// Function to toggle between Hindi and English
const toggleTranslation = () => {
  if (translated) {
    setTranslated(false);
  } else {
    translateToHindi();
  }
};



  const navigate = useNavigate(); // useNavigate for navigation
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const roleDoc = await getDoc(doc(db, "roles", currentUser.uid));
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
          "/",
          "/LoginSignup",
          "/Eligibility",
          "/Feedback",
          "/RoleSelect",
          "/LogSignGov",
          "/LogSignStake",
          "/LogAdmin",
          "/GovLoadScreen",
          "/FAQ",
          "/Notices",
          "/PolicyGuideline",
          "/AboutUs",
          "/ChatPopup",
          "/Schemes",
        ];
        if (!allowedPaths.includes(location.pathname)) {
          navigate("/RoleSelect");
        }

        console.log("You are Logged Out!");
      }
    });

    return () => unsubscribe();
  }, [navigate, location.pathname]); // Added location.pathname as a dependency

  // Logout function
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        navigate("/"); // Redirect to login page after logout
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="header-main">
        <div>
          <img src={Logo} alt="Logo Icon" className="logo-img" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menuicon} alt="Menu Icon" />
        </div>
        <div className="navbar-main">
          <h1>Ministry of AYUSH - Startup Initiative</h1>
          <div role="button" onClick={toggleTranslation} className="translate-btn">
            {translated ? "Show in English" : "Translate to Hindi"}
          </div>


          <nav>
            <Link to="/" className="nav-link">
              Home
            </Link>
            {user ? (
              role === "startup" ? (
                <Link to="/Dashboard" className="nav-link">
                  Dashboard
                </Link>
              ) : role === "govtofficial" ? (
                <Link to="/GovDashboard" className="nav-link">
                  Government Dashboard
                </Link>
              ) : null
            ) : (
              <Link to="/RoleSelect" className="nav-link">
                Login/Signup
              </Link>
            )}
          </nav>
          {menuOpen && (
          <div className="menu-container-left">
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/PolicyGuideline" className="menu-item">
            Policy & Guidelines
          </Link>
          <Link to="/Feedback" className="menu-item">
            Feedback
          </Link>
          <Link to="/Eligibility" className="menu-item">
            Eligibility
          </Link>
          <Link to="/Notices" className="menu-item">
            Notices
          </Link>
          <Link to="/Schemes" className="menu-item">
            Schemes 
          </Link>
          <Link to="/FAQ" className="menu-item">
            FAQ
          </Link>
          <Link to="/AboutUs" className="menu-item">
            About Us 
          </Link>
          {user ? (
            <Link onClick={handleLogout} className="menu-item">
              Log Out
            </Link>
          ) : (
            <Link to="/RoleSelect" className="menu-item">
              Login/Signup
            </Link>
          )}
        </div>
          )}
        </div>
      </header>
    

      <Routes>
        
        <Route 
        path="/" 
        element={translated ? (
          <div className="translated-content">{translatedContent}</div>
        ) : (
          <Home />
        )}
        />
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/Schemes" element={<Schemes />} />
        <Route path="/Notices" element={<Notices />} />
        <Route path="/PolicyGuideline" element={<PolicyGuidline />} />
        <Route 
         path="/ApplicationsGov" 
         element={
          <ApplicationsGov />
         } />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route
          path="/Eligibility"
          element={
              <Eligibility />
          }
        />
        <Route
          path="/Feedback"
          element={
              <Feedback />
          }
        />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/LogSignGov" element={<LogSignGov />} />
        <Route path="/GovLoadScreen" element={<GovLoadScreen />} />
        <Route
          path="/GovDashboard"
          element={
            <ProtectedRoute>
              <GovDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/policy" element={<policy />} />
        <Route path="/LogSignStake" element={<LogSignStake />} />
        <Route path="/StakeDashboard" element={<StakeDashboard />} />
        <Route path="/LogAdmin" element={
           <LogAdmin />
          } 
        />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/RoleSelect" element={<RoleSelect />} />
        <Route
          path="/RegistrationForm1"
          element={
            <ProtectedRoute>
              <RegistrationForm1 />
            </ProtectedRoute>
          }
        />
        <Route path="/ChatPopup" element={<ChatPopup />} />
        <Route
          path="/RegistrationForm2"
          element={
            <ProtectedRoute>
              <RegistrationForm2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/RegistrationForm3"
          element={
            <ProtectedRoute>
              <RegistrationForm3 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/TrackApplication"
          element={
            <ProtectedRoute>
              <TrackApplication />
            </ProtectedRoute>
          }
        />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>

      <div >
      {/* <h1>Chatbot Interface</h1> */}
      {/* Button positioned in the bottom-right corner */}
      <div className="chatbot-container">
        <ChatBoticon toggleChatbot={toggleChatbot} />
      </div>
      <ChatPopup chatVisible={chatVisible} toggleChatbot={toggleChatbot} />
    </div>

      <footer className="footer">
        <p>&copy; 2024 Ayush Ministry. All rights reserved.</p>
      </footer>
      
      


    </div>
  );
}

export default App;
