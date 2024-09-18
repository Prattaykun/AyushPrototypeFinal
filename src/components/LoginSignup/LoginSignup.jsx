import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function LoginSignup() {
  const [action, setAction] = useState("Login");
  const [password, setPassword] = useState(true);

  const handleClick = () => {
    setPassword(!password);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>

        <div className="password-container input">
          <img src={password_icon} alt="" />
          <input
            className="input"
            placeholder="Password"
            type={password ? "password" : "text"}
          />
          {password ? (
            <Eye onClick={handleClick} />
          ) : (
            <EyeOff onClick={handleClick} />
          )}
        </div>

        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="password-container input">
            <img src={password_icon} alt="" />
            <input
              className="input"
              placeholder="Re-Enter Password"
              type={password ? "password" : "text"}
            />
            {password ? (
              <Eye onClick={handleClick} />
            ) : (
              <EyeOff onClick={handleClick} />
            )}
          </div>
        )}
      </div>

      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        {action === "Login" && (
          <>
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign up
            </div>

            <Link to="/Dashboard">
              <div
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Login");
                }}
              >
                Login
              </div>
            </Link>
          </>
        )}

        {action === "Sign Up" && (
          <>
            <Link to="/RegistrationForm1">
              <div
                className={action === "Login" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign up
              </div>
            </Link>

            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
