import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { collection, addDoc,serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase'; // Firestore instance

const GovDashboard = () => {
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle form submission and push notice to Firestore
  const handlePushNotice = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
  
    if (noticeTitle === '' || noticeContent === '') {
      setError('Both title and content are required.');
      setLoading(false);
      return;
    }
  
    try {
      await addDoc(collection(db, 'notices'), {
        title: noticeTitle,
        content: noticeContent,
        timestamp: serverTimestamp(), // Using serverTimestamp for accurate time
      });
      setSuccess('Notice posted successfully!');
      setNoticeTitle('');
      setNoticeContent('');
    } catch (err) {
      setError('Error posting notice. Please try again.');
      console.error('Error adding notice:', err);
    } finally {
      setLoading(false);
    }
  };
  // Navigate to ApplicationsGov page
  const navigateToApplications = () => {
    navigate('/ApplicationsGov');
  };

  return (
    <div className="gov-dashboard">
      <h2>Government Dashboard</h2>

      <div className="notice-section">
        <h3>Post a New Notice</h3>
        <form onSubmit={handlePushNotice}>
          <div>
            <label>Notice Title</label>
            <input
              type="text"
              value={noticeTitle}
              onChange={(e) => setNoticeTitle(e.target.value)}
              placeholder="Enter notice title"
              required
            />
          </div>
          <div>
            <label>Notice Content</label>
            <textarea
              value={noticeContent}
              onChange={(e) => setNoticeContent(e.target.value)}
              placeholder="Enter notice content"
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Posting...' : 'Post Notice'}
          </button>
        </form>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="applications-button">
        <button onClick={navigateToApplications}>Go to Applications</button>
      </div>
    </div>
  );
};

export default GovDashboard;
