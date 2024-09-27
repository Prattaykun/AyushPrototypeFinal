import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase'; // Firestore instance

const GovDashboard = () => {
  const [faqCategory, setFaqCategory] = useState('generalFAQs');
  const [faqQuestion, setFaqQuestion] = useState('');
  const [faqAnswer, setFaqAnswer] = useState('');
  const [faqVideoURL, setFaqVideoURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [faqSuccess, setFaqSuccess] = useState('');
  const [faqError, setFaqError] = useState('');
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  const [noticeLoading, setNoticeLoading] = useState(false);
  const [noticeSuccess, setNoticeSuccess] = useState('');
  const [noticeError, setNoticeError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle FAQ submission to Firestore
  const handlePushFAQ = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFaqError('');
    setFaqSuccess('');

    if (faqQuestion === '' || faqAnswer === '') {
      setFaqError('Both question and answer are required.');
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, faqCategory), {
        question: faqQuestion,
        answer: faqAnswer,
        videoURL: faqVideoURL || null, // Optional video URL
        timestamp: serverTimestamp(),
      });
      setFaqSuccess('FAQ posted successfully!');
      setFaqQuestion('');
      setFaqAnswer('');
      setFaqVideoURL('');
    } catch (err) {
      setFaqError('Error posting FAQ. Please try again.');
      console.error('Error adding FAQ:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Notice submission to Firestore (no changes here)
  const handlePushNotice = async (e) => {
    e.preventDefault();
    setNoticeLoading(true);
    setNoticeError('');
    setNoticeSuccess('');

    if (noticeTitle === '' || noticeContent === '') {
      setNoticeError('Both title and content are required.');
      setNoticeLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, 'notices'), {
        title: noticeTitle,
        content: noticeContent,
        timestamp: serverTimestamp(), // Using serverTimestamp for accurate time
      });
      setNoticeSuccess('Notice posted successfully!');
      setNoticeTitle('');
      setNoticeContent('');
    } catch (err) {
      setNoticeError('Error posting notice. Please try again.');
      console.error('Error adding notice:', err);
    } finally {
      setNoticeLoading(false);
    }
  };

  // Navigate to ApplicationsGov page
  const navigateToApplications = () => {
    navigate('/ApplicationsGov');
  };

  return (
    <div className="gov-dashboard">
      <h2>Government Dashboard</h2>

      {/* Notice section (unchanged) */}
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
          <button type="submit" disabled={noticeLoading}>
            {noticeLoading ? 'Posting...' : 'Post Notice'}
          </button>
        </form>
        {noticeSuccess && <p className="success-message">{noticeSuccess}</p>}
        {noticeError && <p className="error-message">{noticeError}</p>}
      </div>

      {/* FAQ section */}
      <div className="faq-section">
        <h3>Post a New FAQ</h3>
        <form onSubmit={handlePushFAQ}>
          <div>
            <label>FAQ Category</label>
            <select
              value={faqCategory}
              onChange={(e) => setFaqCategory(e.target.value)}
              required
            >
              <option value="">Select FAQ Category</option>
              <option value="generalFAQs">General</option>
              <option value="startupFAQs">Startups</option>
              <option value="regulatorFAQs">Regulator</option>
              <option value="technicalSupportFAQs">Technical Support</option>
              <option value="stakeholderFAQs">Stakeholder</option>
            </select>
          </div>
          <div>
            <label>FAQ Question</label>
            <input
              type="text"
              value={faqQuestion}
              onChange={(e) => setFaqQuestion(e.target.value)}
              placeholder="Enter FAQ question"
              required
            />
          </div>
          <div>
            <label>FAQ Answer</label>
            <textarea
              value={faqAnswer}
              onChange={(e) => setFaqAnswer(e.target.value)}
              placeholder="Enter FAQ answer"
              required
            />
          </div>
          <div>
            <label>YouTube Video URL (Optional)</label>
            <input
              type="text"
              value={faqVideoURL}
              onChange={(e) => setFaqVideoURL(e.target.value)}
              placeholder="Enter YouTube video URL"
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Posting...' : 'Post FAQ'}
          </button>
        </form>
        {faqSuccess && <p className="success-message">{faqSuccess}</p>}
        {faqError && <p className="error-message">{faqError}</p>}
      </div>

      <div className="applications-button">
        <button onClick={navigateToApplications}>Go to Applications</button>
      </div>
    </div>
  );
};

export default GovDashboard;
