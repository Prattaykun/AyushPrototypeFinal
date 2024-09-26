import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'; // Firestore instance
import { collection, getDocs } from 'firebase/firestore';
import './Notices.css'; // Importing Ayurvedic-themed styles

const Notices = () => {
  const [notices, setNotices] = useState([]);

  // Fetch notices from Firestore
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const noticesCollection = collection(db, 'notices');
        const querySnapshot = await getDocs(noticesCollection);
        const noticeData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Convert Firestore Timestamp to JavaScript Date
          const date = data.timestamp ? data.timestamp.toDate() : null;
          noticeData.push({ id: doc.id, ...data, date });
        });

        // Sort notices in descending order by date
        noticeData.sort((a, b) => b.date - a.date);

        setNotices(noticeData);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="notices-container">
      <h2 className="notices-title">Government Notices</h2>
      <div className="notice-list">
        {notices.length === 0 ? (
          <p>No notices available.</p>
        ) : (
          <ul>
            {notices.map((notice) => (
              <li key={notice.id}>
                <h3>{notice.title}</h3>
                <p>{notice.content}</p>
                {notice.date && <p>Posted on: {notice.date.toLocaleString()}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notices;
