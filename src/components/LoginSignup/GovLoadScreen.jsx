import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Import Firebase Firestore instance
import { useAuth } from "../hooks/useAuth"; // Custom hook for authenticated user
import "./GovLoadScreen.css"; // Ayurvedic themed CSS for loading screen
import loadingcon from "../Assets/path-to-ayurveda-theme-logo.png"; // Ensure you have the logout.png image in the Assets folder



const GovLoadScreen = () => {
  const navigate = useNavigate();
  const user = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      if (!user) return;

      try {
        // Fetch the user's role from Firestore "roles" collection
        const roleDoc = await getDoc(doc(db, "roles", user.uid));
        if (roleDoc.exists()) {
          const { role } = roleDoc.data();
          if (role === "startup") {
            navigate("/Dashboard");
          } else if (role === "govtofficial") {
            navigate("/GovDashboard");
          } else {
            // Redirect or handle other roles or no role
            navigate("/Unauthorized");
          }
        } else {
          console.error("No such role document!");
        }
      } catch (error) {
        console.error("Error fetching role:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-animation">
          <img src= {loadingcon} alt="Ayurvedic Logo" />
          <h2>Loading...</h2>
          <p>Connecting you to the portal, please wait...</p>
        </div>
      </div>
    );
  }

  return null; // No UI when not loading
};

export default GovLoadScreen;
