import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase'; // Import auth and db from your firebase setup
import './TrackApplication.css'; // Add your styles here

const TrackApplication = () => {
  const [status, setStatus] = useState('In Review');
  const [submissionDate, setSubmissionDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUser = auth.currentUser; // Gets the currently authenticated user

  useEffect(() => {
    const fetchApplicationStatus = async () => {
      if (currentUser) {
        const applicationDoc = doc(db, 'users', currentUser.uid);
        try {
          const docSnap = await getDoc(applicationDoc);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setStatus(data.status || 'In Review'); // Default to "In Review" if no status found
            setSubmissionDate(data.submissionDate); // Get submission date
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching document:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchApplicationStatus();
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

 // Convert ISO string to Indian Date Format (DD/MM/YYYY)
 const formatDateToIndianFormat = (isoString) => {
  if (isoString) {
    const date = new Date(isoString); // Parse ISO string into a Date object
    return date.toLocaleDateString('en-IN'); // Indian date format
  }
  return 'N/A'; // If submission date is null or invalid
};



  return (
    <div className="container mt-5 track-application-container">
      <h2 className="text-center mb-4">Track Your Application</h2>
      <div className="application-status">
        <p>
          <strong>Status: </strong>
          <span className={`status-${status.toLowerCase()}`}>{status}</span>
        </p>
        {submissionDate && (
          <p>
            <strong>Application submitted on: </strong>
            {formatDateToIndianFormat(submissionDate)}
          </p>
        )}
      </div>
    </div>
  );
};

export default TrackApplication;
