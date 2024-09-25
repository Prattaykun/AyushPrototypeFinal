import React, { useState, useEffect } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, getDocs,setDoc,doc } from "firebase/firestore";
import { app } from "../../firebase";
import { Eye, EyeOff } from "lucide-react";

const auth = getAuth(app);
const db = getFirestore(app);

function LogSignGov() {
  const [action, setAction] = useState("Login");

  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Separate state for the password value
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Separate state for visibility toggle
  const [uniqueId, setUniqueId] = useState(""); // State for unique ID input
  const [validIds, setValidIds] = useState([]); // Store valid unique IDs from Firestore
  const [error, setError] = useState("");
  const navigate = useNavigate(); // useNavigate hook for redirecting

  useEffect(() => {
    // Fetch unique IDs from Firestore
    const fetchUniqueIds = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "governmentUniqueIds"));
        const ids = querySnapshot.docs.map(doc => doc.data().uniqueId);
        setValidIds(ids); // Store valid unique IDs in state
      } catch (error) {
        console.error("Error fetching unique IDs: ", error);
      }
    };

    fetchUniqueIds(); // Call the fetch function when the component mounts
  }, []);

  // Toggle password visibility
  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const createUser = async () => {
    // Check if entered unique ID matches one of the IDs from Firestore
    if (validIds.includes(uniqueId)) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });

        // Add role to Firestore
        const userRole = {
          uid: userCredential.user.uid,
          role: "govtofficial"
        };
        await setDoc(doc(db, "roles", userCredential.user.uid), userRole);

        alert("Success! Government Official registered.");
        navigate("/GovLoadScreen"); // Redirect after successful registration
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Invalid Unique ID. Please contact the admin for assistance.");
    }
  };

  const signinUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Sign in Success");
      navigate("/GovLoadScreen"); // Redirect to dashboard on successful login
    } catch (err) {
      console.error("Sign in error: ", err);
      alert(err.message); // Display error if sign in fails
    }
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
              placeholder="Unique Id"
              onChange={(e) => setUniqueId(e.target.value)} // Update unique ID state
              value={uniqueId}
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
            type={isPasswordVisible ? "text" : "password"} // Use isPasswordVisible to toggle between text and password types
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password} // Use password state for input value
            required
          />
          {isPasswordVisible ? (
            <EyeOff onClick={handlePasswordVisibility} />
          ) : (
            <Eye onClick={handlePasswordVisibility} />
          )}
        </div>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="password-container input">
            <img src={password_icon} alt="" />
            <input
              className="input"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Re-Enter Password"
              required
            />
            {isPasswordVisible ? (
              <EyeOff onClick={handlePasswordVisibility} />
            ) : (
              <Eye onClick={handlePasswordVisibility} />
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
              onClick={signinUser} // Call signinUser on click
            >
              Login
            </div>
          </>
        )}

        {action === "Sign Up" && (
          <>
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={createUser} // Call createUser on click
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
      {error && <p className="error">{error}</p>} {/* Display error if any */}
    </div>
  );
}

export default LogSignGov;
