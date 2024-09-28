import React from "react";
import "./PolicyGuideline.css";

const PolicyGuideline = () => {
  return (
    <div className="guideline-container">
      <header className="guideline-header">
        <h1>Ayush Ministry Startup Registration Policy Guidelines</h1>
        
      </header>
      <div className="about-us-box">
      <p>
          Welcome to the Ayush Ministry's Startup Registration Portal. Below are
          the guidelines and policies for new startups registering under the
          Ayush ecosystem.
        </p>
      </div>
      <section className="guideline-section">
        <h2>Eligibility Criteria</h2>
        <p>
          Startups applying for registration must meet the following criteria:
        </p>
        <ul>
          <li>
            Be a legally registered entity under the Companies Act or relevant
            state laws.
          </li>
          <li>Have a minimum of 51% of ownership held by Indian citizens.</li>
          <li>
            Operate in the Ayush ecosystem, focusing on wellness, herbal, and
            traditional medicine sectors.
          </li>
        </ul>
      </section>

      <section className="guideline-section">
        <h2>Documents Required</h2>
        <p>The following documents must be submitted during registration:</p>
        <ul>
          <li>Company registration certificate</li>
          <li>Tax Identification Number (TIN)</li>
          <li>Relevant compliance certificates (if applicable)</li>
          <li>Proof of business address</li>
        </ul>
      </section>

      <section className="guideline-section">
        <h2>Registration Process</h2>
        <p>Follow these steps to register your startup:</p>
        <ol>
          <li>
            Click on the "Register" button and complete the registration form.
          </li>
          <li>
            Upload the required documents in the specified format (PDF, DOCX).
          </li>
          <li>Submit your application for review.</li>
          <li>
            Once approved, you will receive a confirmation email, and you will
            have access to the Ayush Ministry startup portal.
          </li>
        </ol>
      </section>

      <section className="guideline-section">
        <h2>Compliance and Regulatory Requirements</h2>
        <p>Startups must comply with the following regulations:</p>
        <ul>
          <li>Regularly update their business and compliance information.</li>
          <li>
            Submit necessary reports and filings to maintain active status.
          </li>
          <li>
            Adhere to Ayush Ministry policies on wellness and traditional
            medicine practices.
          </li>
        </ul>
      </section>

      <section className="guideline-section">
        <h2>Technical Support</h2>
        <p>
          If you face any issues during registration, please contact our
          technical support team:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:startups@ayush.gov.in">startups@ayush.gov.in</a>
          </li>
          <li>Phone: +91 1234 567 890</li>
        </ul>
      </section>
    </div>
  );
};

export default PolicyGuideline;
