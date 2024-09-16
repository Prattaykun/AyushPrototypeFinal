import logo_icon from "./ayushlogo.jpg";
import "./App.css";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import RegistrationForm1 from "./components/Registration/RegistrationForm1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm2 from "./components/Registration/RegistrationForm2";
import RegistrationForm3 from "./components/Registration/RegistrationForm3";
import Home from "./components/Home/HomePage";
import Dashboard from "./components/Dashboard";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Ayush Ministry - Startup Initiative</h1>
        <nav>
          <Link to="/" className="nav-link">
            <>Home</>
          </Link>
          <Link to="/LoginSignup" className="nav-link">
            <>Login</>
          </Link>
          <Link to="/RegistrationForm1" className="nav-link">
            <>Registration</>
          </Link>
        </nav>
      </header>
      <Routes>
        {/* /*<Route path="/" element={<Home />} />* */}
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/RegistrationForm1" element={<RegistrationForm1 />} />
        <Route path="/RegistrationForm2" element={<RegistrationForm2 />} />
        <Route path="/RegistrationForm3" element={<RegistrationForm3 />} />
      </Routes>
      <footer className="footer">
        <p>&copy; 2024 Ayush Ministry. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
