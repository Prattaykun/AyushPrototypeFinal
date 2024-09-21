import React, { useState } from "react";
import "./Feedback.css"; // Import CSS for styling

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Function to handle feedback submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link
    const mailtoLink = `mailto:megabytekun@gmail.com?subject=Feedback from ${encodeURIComponent(
      name
    )}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0A%0AFeedback:%0A${encodeURIComponent(message)}`;

    // Open mail client with prefilled message
    window.location.href = mailtoLink;

    // Set submitted state to show success message
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      <h2>We Value Your Feedback!</h2>
      {submitted ? (
        <div className="feedback-success">
          <p>Thank you for your feedback!</p>
        </div>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Your Feedback:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your feedback"
              rows="5"
              required
            />
          </div>
          <button className="submit-btn" type="submit">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
