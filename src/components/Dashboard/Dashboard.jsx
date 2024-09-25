import React, { useState,useEffect } from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import logoutIcon from "../Assets/logout.png"; // Ensure you have the logout.png image in the Assets folder
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";


export default function Dashboard() {
  const [startupData, setStartupData] = useState(null);

  const auth = getAuth(); // Firebase authentication instance
  const navigate = useNavigate(); // For navigation after logout


  useEffect(() => {
    // Fetch the user's startup data from Firestore
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStartupData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchData();
  }, [auth]);


  // Logout function
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        navigate("/LoginSignup"); // Redirect to login page after logout
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  const handleEdit = () => {
    console.log("Edit startup information");
  };

  if (!startupData) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }


  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
  };

  const flexContainerStyle = {
    display: "flex",
    gap: "20px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const tableCellStyle = {
    padding: "10px",
    borderBottom: "1px solid #e0e0e0",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div className="dashboard-container" style={containerStyle}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Startup Dashboard
      </h1>

      <div style={flexContainerStyle}>
        <div className="startup-info-card" style={{ ...cardStyle, flex: 2 }}>
          <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
            Startup Information
          </h2>
          
          <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  }}
>
  <div style={{ display: "flex", alignItems: "center" }}>
    <div
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: "#007bff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        marginRight: "20px",
      }}
    >
      {startupData.companyName.substring(0, 2).toUpperCase()}
    </div>
    <div>
      <h3 style={{ fontSize: "18px", margin: "0" }}>
        {startupData.companyName}
      </h3>
      <p style={{ margin: "0", color: "#666" }}>
        Founded by {startupData.founderName}
      </p>
    </div>
  </div>
  {/* Logout Button */}
  <div style={{ display: "flex", alignItems: "center" }}>
    <button
      onClick={handleLogout}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0", // Adjust padding if needed
      }}
    >
      <img
        src={logoutIcon}
        alt="Logout"
        style={{ width: "25px", height: "25px" }}
      />
    </button>
  </div>
          </div>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={tableCellStyle}>
                  <strong>Title of Startup:</strong>
                </td>
                <td style={tableCellStyle}>{startupData.startupTitle}</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  <strong>Company Name:</strong>
                </td>
                <td style={tableCellStyle}>{startupData.companyName}</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  <strong>Stage :</strong>
                </td>
                <td style={tableCellStyle}>{startupData.stage}</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  <strong>Group Size:</strong>
                </td>
                <td style={tableCellStyle}>{startupData.members} members</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  <strong>Theme:</strong>
                </td>
                <td style={tableCellStyle}>{startupData.theme}</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  <strong>Funding Status:</strong>
                </td>
                <td style={tableCellStyle}>{startupData.funded}</td>
              </tr>

            </tbody>
          </table>
          <Link to="/RegistrationForm1">
            <button
              className="edit-button"
              onClick={handleEdit}
              style={buttonStyle}
            >
              Edit Information
            </button>
          </Link>
        </div>
        <div style={{ ...cardStyle, flex: 1 }}>
          <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
            Startup Description
          </h2>
          <p style={{ lineHeight: "1.6" }}>{startupData.abstract}</p>
        </div>
      </div>
      <div style={cardStyle}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Quick Actions</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "10px",
          }}
        >
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
          >
            Update Company Info
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
          >
            Manage Team
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
          >
            Submit Documents
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
          >
            Schedule Meeting
          </button>
          <Link to="/TrackApplication">
            <button
              style={buttonStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  buttonHoverStyle.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  buttonStyle.backgroundColor)
              }
            >
              Track Application
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
