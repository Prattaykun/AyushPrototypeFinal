import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import google_icon from "../Assets/google.png"; // Assuming you have a Google logo
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import { Eye, EyeOff } from "lucide-react";

const auth = getAuth(app);

function LoginSignup() {
  const [action, setAction] = useState("Login");

  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(true); // State for password
  const handleClick = () => {
    setPassword(!password);
      };
  const navigate = useNavigate(); // useNavigate hook for redirecting

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Update the user profile with the name
        return updateProfile(userCredential.user, { displayName: name });
      })
      .then(() => {
        alert("Success! User created with name: " + name);
      })
      .catch((error) => {
        alert(error.message); // Handle errors
      });
  };

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("Sign in Success");
        navigate("/Dashboard"); // Redirect to dashboard on successful login
      })
      .catch((err) => {
        console.log(err);
        alert(err.message); // Display error if sign in fails
      });
  };

  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-In Success");
        navigate("/Dashboard"); // Redirect to dashboard on successful login
      })
      .catch((error) => {
        console.log(error);
        alert(error.message); // Handle errors
      });
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
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email Id"
            required
          />
        </div>
        <div className="password-container input">
          <img src={password_icon} alt="" />
          <input
            className="input"
            type={password ? "password" : "text"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
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
            type={password ? "password" : "text"}
             placeholder="Re-Enter Password" required 
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

            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => signinUser()} // Call signinUser on click
            >
              Login
            </div>

            <div
              className="google-signin-button"
              onClick={signinWithGoogle} // Call Google sign-in on click
            >
              <img src={google_icon} alt="Google Logo" /> Google
            </div>
          </>
        )}

        {action === "Sign Up" && (
          <>
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => createUser()} // Call createUser on click
            >
              Sign up
            </div>

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
