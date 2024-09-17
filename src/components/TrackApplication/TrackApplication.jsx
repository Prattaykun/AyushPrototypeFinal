import React from "react";
import "./TrackApplication.css";

export default function TrackApplication() {
  // Example status data (you can fetch this from an API in a real app)
  const status = "In Review"; // Possible values: "Pending", "In Review", "Approved", "Rejected"
  const progress = 60; // Progress percentage

  return (
    <div className="track-container">
      <h1 className="track-title">Track Your Application</h1>
      <div className="track-card">
        <h2 className="status-title">Current Status</h2>
        <div
          className={`status-badge ${status
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          {status}
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{progress}% Completed</p>
        <div className="details-container">
          <h3>Application Details:</h3>
          <p>Submitted on: September 15, 2024</p>
          <p>Expected Review Date: September 30, 2024</p>
        </div>
      </div>
    </div>
  );
}
