import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "./RegistrationForm.css";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db,app } from "../../firebase";
import { useAuth } from "../hooks/useAuth"; // Custom hook to get the current authenticated user

const storage = getStorage(app); // Initialize Firebase Storage

const RegistrationForm3 = () => {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const user = useAuth();
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log the user to ensure it's defined
    console.log("Current User: ", user);
  
    if (!user) {
      alert("No user is logged in.");
      return;
    }
  
    try {
      const uploadedFiles = {};
  
      const uploadPromises = Object.keys(formData).map(async (key) => {
        const file = formData[key];
  
        // Check if the file exists before uploading
        if (!file) {
          throw new Error(`No file selected for ${key}`);
        }
  
        const fileRef = ref(storage, `users/${user.uid}/${key}`);
  
        console.log("Uploading file for key:", key, "File:", file);
  
        // Proceed with the file upload
        await uploadBytes(fileRef, file);
  
        // Get download URL
        const downloadURL = await getDownloadURL(fileRef);
        uploadedFiles[key] = downloadURL; // Store the file URLs in the object
      });
  
      // Wait for all files to be uploaded
      await Promise.all(uploadPromises);
  
      // Store the URLs in Firestore
      await setDoc(
        doc(db, "users", user.uid),
        {
          ...uploadedFiles,
          step: 3, // Indicate that step 3 is completed
        },
        { merge: true }
      );
  
      // Alert user upon success
      alert("Documents uploaded and saved successfully");
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error uploading documents:", error);
      alert("Error uploading documents: " + error.message); // Alert the error as well
    }
  };
  
  
  
  

  return (
    <div className="form-container">
      <h2>Upload Documents</h2>
      <form 
      onSubmit={handleSubmit}
      >
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
