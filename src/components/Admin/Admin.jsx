import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import "./Admin.css"; // Assuming you place the CSS file in the same folder
import GovDashboard from "../Dashboard/GovDashboard";

const db = getFirestore(app);
const auth = getAuth(app);

function Admin() {
  const [uniqueId, setUniqueId] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [uniqueIds, setUniqueIds] = useState([]); // For fetching and managing Unique IDs
  const navigate = useNavigate();

  // Function to check the logged-in user's role
  const checkUserRole = async (uid) => {
    const userDoc = await getDoc(doc(db, "roles", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.role;
    }
    return null;
  };

  // Fetch users and their roles from Firestore (roles collection)
  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "roles"));
      const usersList = [];
      for (const userDoc of usersSnapshot.docs) {
        const userData = userDoc.data();
        const userDetailDoc = await getDoc(doc(db, "users", userDoc.id));
        const userDetailData = userDetailDoc.exists() ? userDetailDoc.data() : {};
        usersList.push({ uid: userDoc.id, ...userData, member0_email: userDetailData.member0_email });
      }
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  // Check user role on component mount
  useEffect(() => {
    const checkRole = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const role = await checkUserRole(user.uid);
          if (role !== "admin") {
            navigate("/RoleSelect");
          }
        } else {
          navigate("/RoleSelect");
        }
      });
    };
    checkRole();
  }, [navigate]);

  // Add unique ID function for government officials
  const handleAddUniqueId = async () => {
    if (uniqueId) {
      try {
        await addDoc(collection(db, "governmentUniqueIds"), { uniqueId });
        setMessage("Unique ID added successfully!");
        setUniqueId("");
        fetchUniqueIds(); // Fetch the list again to include the new ID
      } catch (error) {
        setMessage("Error adding unique ID: " + error.message);
      }
    } else {
      setMessage("Please enter a valid Unique ID");
    }
  };

  // Fetch unique IDs from the collection
  const fetchUniqueIds = async () => {
    try {
      const uniqueIdsSnapshot = await getDocs(collection(db, "governmentUniqueIds"));
      const uniqueIdsList = uniqueIdsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUniqueIds(uniqueIdsList);
    } catch (error) {
      setMessage("Error fetching unique IDs: " + error.message);
    }
  };

  // Fetch unique IDs when the component loads
  useEffect(() => {
    fetchUniqueIds();
  }, []);

  // Delete unique ID function
  const handleDeleteUniqueId = async (id) => {
    try {
      await deleteDoc(doc(db, "governmentUniqueIds", id));
      setMessage("Unique ID deleted successfully!");
      setUniqueIds(uniqueIds.filter((uniqueId) => uniqueId.id !== id)); // Remove from UI
    } catch (error) {
      setMessage("Error deleting unique ID: " + error.message);
    }
  };

  // Delete user function
  const handleDeleteUser = async (uid) => {
    try {
      await deleteUser(auth.currentUser); // This is a placeholder. Requires backend for user deletion by admin.
      await deleteDoc(doc(db, "roles", uid));
      setMessage("User deleted successfully!");
      setUsers(users.filter((user) => user.uid !== uid)); // Remove the user from the UI
    } catch (error) {
      setMessage("Error deleting user: " + error.message);
    }
  };

  // Edit user role function
  const handleEditUserRole = async (uid, newRole) => {
    try {
      const userRef = doc(db, "roles", uid);
      await updateDoc(userRef, { role: newRole });
      setMessage("User role updated successfully!");
      // Update the user in the UI
      setUsers(users.map((user) => (user.uid === uid ? { ...user, role: newRole } : user)));
    } catch (error) {
      setMessage("Error updating user role: " + error.message);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* User Management Section */}
      <section className="admin-section">
        <h2>User Management</h2>
        <ul>
          {users.map((user) => (
            <li key={user.uid}>
              {user.member0_email} - {user.email} - Role: {user.role}
              <button onClick={() => handleDeleteUser(user.uid)}>Delete</button>
              <button onClick={() => handleEditUserRole(user.uid, prompt("Enter new role:", user.role))}>
                Edit Role
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Content Management Section */}
      <section className="admin-section">
        <h2>Content Management</h2>
        <p>Create, edit, and delete content pages here.</p>
        {/* Content management UI */}
      </section>

      {/* Media Library Section */}
      <section className="admin-section">
        <h2>Media Library</h2>
        <p>Manage images, videos, and documents here.</p>
      </section>

      {/* Analytics and Reporting Section */}
      <section className="admin-section">
        <h2>Analytics & Reporting</h2>
        <p>Website traffic, user engagement reports.</p>
      </section>

      {/* Citizen Engagement Tools Section */}
      <section className="admin-section">
        <h2>Citizen Engagement Tools</h2>
        <p>Manage online forums, feedback, and more.</p>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="admin-section">
        <h2>Regulatory Compliance</h2>
        <p>Ensure compliance with government regulations.</p>
      </section>

      {/* Data Security Section */}
      <section className="admin-section">
        <h2>Data Security</h2>
        <p>Manage data privacy and security measures.</p>
      </section>

      <GovDashboard />

      {/* Add Unique ID Section */}
      <section className="admin-section">
        <h2>Set Unique IDs for Government Officials</h2>
        <input
          type="text"
          placeholder="Enter Unique ID"
          value={uniqueId}
          onChange={(e) => setUniqueId(e.target.value)}
        />
        <button onClick={handleAddUniqueId}>Add Unique ID</button>
        {message && <p>{message}</p>}
        <ul>
          {uniqueIds.map((id) => (
            <li key={id.id}>
              {id.uniqueId}
              <button onClick={() => handleDeleteUniqueId(id.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Admin;
