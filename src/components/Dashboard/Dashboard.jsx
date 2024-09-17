import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

export default function StartupDashboard() {
  const [startupData, setStartupData] = useState({
    username: "johndoe",
    dob: "1990-01-01",
    address: "123 Startup Street, Tech City, 12345",
    groupSize: "5",
    idProof: "ID_12345.pdf",
    companyName: "InnoTech Solutions",
    founderName: "John Doe",
    description:
      "InnoTech Solutions is a cutting-edge startup focused on developing AI-powered solutions for small businesses. Our mission is to democratize access to advanced technology and help local businesses thrive in the digital age.",
  });

  const handleEdit = () => {
    // In a real application, this would open a form to edit the startup information
    console.log("Edit startup information");
  };

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
    <div style={containerStyle}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Startup Dashboard
      </h1>
      <div style={flexContainerStyle}>
        <div style={{ ...cardStyle, flex: 2 }}>
          <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
            Startup Information
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
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
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={tableCellStyle}>
                  <strong>Username</strong>
                </td>
                <td style={tableCellStyle}>{startupData.username}</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  <strong>Date of Birth</strong>
                </td>
                <td style={tableCellStyle}>{startupData.dob}</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  <strong>Address</strong>
                </td>
                <td style={tableCellStyle}>{startupData.address}</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  <strong>Group Size</strong>
                </td>
                <td style={tableCellStyle}>{startupData.groupSize} people</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  <strong>ID Proof</strong>
                </td>
                <td style={tableCellStyle}>{startupData.idProof}</td>
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
          <p style={{ lineHeight: "1.6" }}>{startupData.description}</p>
        </div>
      </div>
      <div style={cardStyle}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Quick Actions
        </h2>
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
