import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./RegistrationForm.css";

const RegistrationForm3 = () => {
  const [formData, setFormData] = useState({});
  const location = useLocation();

  // Function to parse query parameters
  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  // Get the number of members from the URL
  const queryParams = getQueryParams(location.search);
  const membersCount = Number(queryParams.get("members"));

  const handleFileChange = (e, index, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", formData);
    // Handle form submission, API calls, etc.
  };

  return (
    <div className="form-container">
      <h2>Upload Documents</h2>
      <form onSubmit={handleSubmit}>
        {/* Dynamically generate ID proof upload fields */}
        {[...Array(membersCount)].map((_, idx) => (
          <div className="input-group" key={idx}>
            <label>Upload ID Proof for Member {idx + 1}</label>
            <input
              type="file"
              name={`member${idx}_idProof`}
              onChange={(e) => handleFileChange(e, idx, `member${idx}_idProof`)}
              required
            />
          </div>
        ))}

        {/* Upload any other relevant documents */}
        <div className="input-group">
          <label>Upload any other relevant Documents</label>
          <input
            type="file"
            name="documents"
            onChange={(e) => handleFileChange(e, null, "documents")}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm3;
