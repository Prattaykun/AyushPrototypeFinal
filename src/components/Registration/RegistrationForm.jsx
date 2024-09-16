// src/components/RegistrationForm.js
import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    address: "",
    groupSize: "",
    idProof: null,
    companyName: "",
    founderName: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      idProof: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", formData);
    // Handle form submission, API calls, etc.
  };

  return (
    <div className="form-container">
      <h2>Register Your Startup</h2>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="input-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Group Size */}
        <div className="input-group">
          <label>Number of People in Group</label>
          <input
            type="number"
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
            required
          />
        </div>

        {/* Upload ID Proof */}
        <div className="input-group">
          <label>Upload Valid ID Proof</label>
          <input
            type="file"
            name="idProof"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Company Name */}
        <div className="input-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Founder Name */}
        <div className="input-group">
          <label>Founder Name</label>
          <input
            type="text"
            name="founderName"
            value={formData.founderName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Startup Description */}
        <div className="input-group">
          <label>Startup Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
