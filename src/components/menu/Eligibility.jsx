import React, { useState } from "react";
import "../Home/HomePage.css"; // Import the existing CSS for consistent styling

const Eligibility = () => {
  const [startupAge, setStartupAge] = useState("");
  const [location, setLocation] = useState("");
  const [turnover, setTurnover] = useState("");
  const [eligibility, setEligibility] = useState(null);

  // Function to check eligibility
  const checkEligibility = () => {
    const isEligible =
      parseInt(startupAge) < 10 &&
      parseFloat(turnover) <= 10000 &&
      location === "India";
    setEligibility(isEligible);
  };

  return (
    <div className="eligibility-container">
      <h2>Check Your Eligibility</h2>
      <div className="input-group">
        <label htmlFor="startupAge">Startup Age (in years):</label>
        <input
          type="number"
          id="startupAge"
          value={startupAge}
          onChange={(e) => setStartupAge(e.target.value)}
          placeholder="Enter startup age"
        />
      </div>
      <div className="input-group">
        <label htmlFor="turnover">Startup Yearly Turnover (in INR Lakhs):</label>
        <input
          type="number"
          id="turnover"
          value={turnover}
          onChange={(e) => setTurnover(e.target.value)}
          placeholder="Enter startup turnover"
        />
      </div>
      <div className="input-group">
        <label htmlFor="location">Select Your Country:</label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          {/* Add more country options as needed */}
        </select>
      </div>
      <button className="check-elg" onClick={checkEligibility}>
        Check Eligibility
      </button>

      {eligibility !== null && (
        <div className={`result ${eligibility ? "eligible" : "not-eligible"}`}>
          {eligibility ? (
            <p>You are eligible!</p>
          ) : (
            <p>Sorry, you are not eligible.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Eligibility;
