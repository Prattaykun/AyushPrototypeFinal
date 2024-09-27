// src/components/RegistrationForm1.js
import React, { useState } from "react";
import "./RegistrationForm.css";
import RegistrationForm2 from "./RegistrationForm2";
import { Link, useNavigate} from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth"; // Custom hook to get the current authenticated user
import { db } from "../../firebase"; // Import Firestore instance
const RegistrationForm1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    parentName:"",
    gender:"",
    dob: "",
    address: "",
  });
  const user = useAuth(); // Get the currently authenticated user
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save the form data to Firestore under the current user's document
      await setDoc(doc(db, "users", user.uid), {
        ...formData, // Save form data
        step: 1,    // Track step of form
        submissionDate: new Date().toISOString(), // Add the current date and time
      });
      navigate("/RegistrationForm2"); // Navigate to the next form
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };
  
  return (
    <div className="form-container">
      <h2>Basic Details</h2>
      <form action="/RegistrationForm2"
           onSubmit={handleSubmit}
      >
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Parent's Name</label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

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
        {/* <Link to="/RegistrationForm2"> */}
        <button type="submit">Confirm</button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default RegistrationForm1;
