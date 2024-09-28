import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Firestore instance
import "./FAQ.css";

const FAQ = () => {
  const [generalFAQs, setGeneralFAQs] = useState([]);
  const [startupFAQs, setStartupFAQs] = useState([]);
  const [regulatorFAQs, setRegulatorFAQs] = useState([]);
  const [technicalSupportFAQs, setTechnicalSupportFAQs] = useState([]);
  const [stakeholderFAQs, setStakeholderFAQs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  // Fetch FAQs from Firestore
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const generalSnapshot = await getDocs(collection(db, 'generalFAQs'));
        const startupSnapshot = await getDocs(collection(db, 'startupFAQs'));
        const regulatorSnapshot = await getDocs(collection(db, 'regulatorFAQs'));
        const technicalSnapshot = await getDocs(collection(db, 'technicalSupportFAQs'));
        const stakeholderSnapshot = await getDocs(collection(db, 'stakeholderFAQs'));

        setGeneralFAQs(generalSnapshot.docs.map(doc => doc.data()));
        setStartupFAQs(startupSnapshot.docs.map(doc => doc.data()));
        setRegulatorFAQs(regulatorSnapshot.docs.map(doc => doc.data()));
        setTechnicalSupportFAQs(technicalSnapshot.docs.map(doc => doc.data()));
        setStakeholderFAQs(stakeholderSnapshot.docs.map(doc => doc.data()));
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to convert a regular YouTube URL into embedded format
  const getEmbeddedURL = (url) => {
    if (!url) return null;
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
  };

  const renderFAQs = (faqs) =>
    faqs.map((faq, index) => (
      <div className="faq-item" key={index}>
        <div className="faq-question" onClick={() => toggleFAQ(index)}>
          {faq.question}
        </div>
        <div className={`faq-answer ${activeIndex === index ? "active" : ""}`}>
          {faq.answer}
          {faq.videoURL && (
            <div className="faq-video">
              <iframe
                width="560"
                height="315"
                src={getEmbeddedURL(faq.videoURL)}
                title="FAQ Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    ));

  return (
    <div className="faq-container">
      <h2>General FAQs for All Users</h2>
      {renderFAQs(generalFAQs)}

      <h2>For Startups/Business Users</h2>
      {renderFAQs(startupFAQs)}

      <h2>For Regulators</h2>
      {renderFAQs(regulatorFAQs)}

      <h2>Technical Support and Troubleshooting</h2>
      {renderFAQs(technicalSupportFAQs)}

      <h2>Stakeholder FAQs</h2>
      {renderFAQs(stakeholderFAQs)}
    </div>
  );
};

export default FAQ;
