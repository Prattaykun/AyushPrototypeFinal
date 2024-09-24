import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebase"; // Adjust the path to your firebase config

const db = getFirestore(app);

function Admin() {
  const [uniqueId, setUniqueId] = useState("");
  const [message, setMessage] = useState("");

  const handleAddUniqueId = async () => {
    if (uniqueId) {
      try {
        await addDoc(collection(db, "governmentUniqueIds"), { uniqueId });
        setMessage("Unique ID added successfully!");
        setUniqueId(""); // Clear the input
      } catch (error) {
        setMessage("Error adding unique ID: " + error.message);
      }
    } else {
      setMessage("Please enter a valid Unique ID");
    }
  };

  return (
    <div>
      <h1>Admin - Set Unique IDs for Government Officials</h1>
      <input
        type="text"
        placeholder="Enter Unique ID"
        value={uniqueId}
        onChange={(e) => setUniqueId(e.target.value)}
      />
      <button onClick={handleAddUniqueId}>Add Unique ID</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Admin;
