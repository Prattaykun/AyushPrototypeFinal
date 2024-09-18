import React, { useState } from "react";
import "./RegistrationForm.css";
import { Link, redirect } from "react-router-dom";

const RegistrationForm2 = () => {
  const themes = [
    "Ayurveda",
    "Yoga",
    "Naturopathy",
    "Unani",
    "Siddha",
    "Homeopathy",
  ];
  const [formData, setFormData] = useState({
    name: "",
    parentName: "",
    gender: "",
    dob: "",
    members: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // nextStep();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return redirect(`/RegistrationForm3?members=${formData.members}`);
  };

  return (
    <div className="form-container">
      <h2>Startup Details</h2>
      <form action="/RegistrationForm3">
        <div className="input-group">
          <label>Title of the Startup</label>
          <input
            type="text"
            name="startupTitle"
            value={formData.startupTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Name of The Company</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Theme of the Startup</label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            {themes.map((theme, index) => (
              <option key={index} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>Abstract (Max 300 words)</label>
          <textarea
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            maxLength="300"
            required
          />
        </div>

        <div className="input-group">
          <label>How it will benefit India? (Max 500 words)</label>
          <textarea
            name="benefit"
            value={formData.benefit}
            onChange={handleChange}
            maxLength="500"
            required
          />
        </div>

        <div className="input-group">
          <label>Startup Stage</label>
          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            required
          >
            <option value="Ideation">Ideation</option>
            <option value="Validation">Validation</option>
            <option value="Early Traction">Early Traction</option>
            <option value="Scaling">Scaling</option>
          </select>
        </div>

        <div className="input-group">
          <label>Funded or Bootstrapped?</label>
          <select
            name="funded"
            value={formData.funded}
            onChange={handleChange}
            required
          >
            <option value="Funded">Funded</option>
            <option value="Bootstrapped">Bootstrapped</option>
          </select>
        </div>

        <div className="input-group">
          <label>Number of Members (Max 4)</label>
          {/* <input
            type="number"
            name="members"
            value={formData.members}
            onChange={handleChange}
            max={4}
            required
          /> */}
          <select
            name="members"
            value={formData.members}
            onChange={handleChange}
            required
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>

        {/* For each member's details */}
        {[...Array(Number(formData.members) || 1)].map((_, idx) => (
          <div key={idx}>
            <h4>Member {idx + 1} Details</h4>
            <div className="input-group">
              <label>Father's Name</label>
              <input
                type="text"
                name={`member${idx}_fatherName`}
                value={formData[`member${idx}_fatherName`]}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name={`member${idx}_mobile`}
                value={formData[`member${idx}_mobile`]}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name={`member${idx}_email`}
                value={formData[`member${idx}_email`]}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Address</label>
              <input
                type="text"
                name={`member${idx}_address`}
                value={formData[`member${idx}_address`]}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>ID Proof</label>
              <select
                name={`member${idx}_idProofType`}
                value={formData[`member${idx}_idProofType`]}
                onChange={handleChange}
                required
              >
                <option value="Aadhar">Aadhar</option>
                <option value="Driving License">Driving License</option>
                <option value="PAN">PAN</option>
                <option value="Passport">Passport</option>
              </select>
            </div>

            <div className="input-group">
              <label>ID Number</label>
              <input
                type="text"
                name={`member${idx}_idNumber`}
                value={formData[`member${idx}_idNumber`]}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        ))}

        {/* <Link to={`/RegistrationForm3?members=${formData.members}`}> */}
        <button type="submit">Confirm</button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default RegistrationForm2;
