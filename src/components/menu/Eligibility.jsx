import React, { useState } from "react";
import "../Home/HomePage.css"; // Import the existing CSS for consistent styling

const Eligibility = () => {
  const [startupAge, setStartupAge] = useState("");
  const [location, setLocation] = useState("");
  const [turnover, setTurnover] = useState("");
  const [eligibility, setEligibility] = useState(null);

  // Function to check eligibility
  const checkEligibility = () => {
    const isEligible =
      parseInt(startupAge) < 10 &&
      parseFloat(turnover) <= 10000 &&
      location === "India";
    setEligibility(isEligible);
  };

  return (
    <div className="eligibility-container">
      <h2>Check Your Eligibility for Registering as a Startup</h2>
      <div className="input-group">
        <label htmlFor="startupAge">Startup Age (in years):</label>
        <input
          type="number"
          id="startupAge"
          value={startupAge}
          onChange={(e) => setStartupAge(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="location">Select Your Country:</label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          {/* Add more country options as needed */}
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="turnover">Annual Turnover (in INR):</label>
        <input
          type="number"
          id="turnover"
          value={turnover}
          onChange={(e) => setTurnover(e.target.value)}
        />
      </div>
      <button className="check-elg" onClick={checkEligibility}>
        Check Eligibility
        </button>

       {eligibility !== null && (
        <div className={`result ${eligibility ? "eligible" : "not-eligible"}`}>
          {eligibility ? (
            <p>You are eligible!</p>
          ) : (
            <p>Sorry, you are not eligible.</p>
          )}
        </div>
       )}
      <div className="about-us-box">
        <h1>Eligibility: (For Startups)</h1>
        <p>
          To be eligible for AYUSH startup registration and receive funding, a startup must meet certain criteria defined by the Ministry of AYUSH, Government of India. AYUSH refers to the traditional systems of medicine such as Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy. Here's an outline of the general criteria and requirements for registration and funding:
        </p>
        <h2>1. Legal Entity Status</h2>
        <p>
          The startup should be a registered entity in India under one of the following legal forms:
          <ul>
            <li>Private Limited Company (under the Companies Act, 2013)</li>
            <li>Limited Liability Partnership (LLP)</li>
            <li>Partnership Firm</li>
            <li>Registered Sole Proprietorship</li>
          </ul>
        </p>
        <h2>2. Innovation in AYUSH Sector</h2>
        <p>
          The startup should be working on innovative products, technologies, or services related to the AYUSH sector. This could include:
          <ul>
            <li>Development of new medicinal formulations</li>
            <li>AYUSH-based wellness products or therapies</li>
            <li>Technological innovations in AYUSH treatment delivery (such as apps, online consultation platforms)</li>
            <li>AYUSH-related research and development (R&D)</li>
            <li>Integration of traditional AYUSH practices with modern healthcare</li>
            <li>AYUSH nutraceuticals or cosmeceuticals</li>
            <li>Development of wellness tourism models based on AYUSH principles</li>
          </ul>
        </p>
        <h2>3. Age of the Startup</h2>
        <p>
          The startup should generally be less than 7 years old from the date of incorporation.
          For biotechnology startups (including those focused on AYUSH research), the maximum age is typically 10 years.
        </p>
        <h2>4. Turnover</h2>
        <p>
          The annual turnover of the startup should not exceed ₹100 crore in any financial year since its incorporation.
        </p>
        <h2>5. Focus on AYUSH Development</h2>
        <p>
          The startup should demonstrate a focus on AYUSH principles and contribute to the promotion, standardization, and commercialization of AYUSH products or services.
        </p>
        <h2>6. Intellectual Property (Optional but Preferred)</h2>
        <p>
          Startups involved in innovation are encouraged to have a well-defined Intellectual Property (IP) strategy. Having patents, trademarks, or proprietary products related to the AYUSH sector increases the chances of funding.
        </p>
        <h2>7. Sustainable and Scalable</h2>
        <p>
          The project or business idea should demonstrate potential for scalability and sustainability. This could include the ability to reach larger markets, generate significant employment, or contribute to social welfare.
        </p>
        <h2>8. AYUSH Startup Policy & Incubation</h2>
        <p>
          The startup should ideally apply through AYUSH incubation centres or recognized incubators that promote AYUSH entrepreneurship. The Ministry of AYUSH collaborates with Atal Innovation Mission (AIM) and Startup India to support such startups.
        </p>
        <h2>9. Funding Opportunities</h2>
        <p>
          Startups in the AYUSH sector may avail funding through:
          <ul>
            <li>Venture Capital Funds approved by the government</li>
            <li>AYUSH-specific grant schemes or seed funds under various government programs</li>
            <li>Collaboration with research institutes for joint R&D initiatives</li>
            <li>Incubation support for early-stage startups, including mentorship, access to labs, and technical assistance</li>
          </ul>
        </p>
        <h2>10. Compliance with AYUSH Guidelines</h2>
        <p>
          The startup must comply with the regulatory frameworks set by the Ministry of AYUSH, including any specific guidelines for the manufacturing, marketing, or delivery of AYUSH products and services.
        </p>
        <h2>11. Additional Documentation</h2>
        <p>
          As part of the application process, the startup might need to submit:
          <ul>
            <li>Business plan or pitch deck</li>
            <li>Proof of registration/incorporation</li>
            <li>Financial statements (if applicable)</li>
            <li>Product details, patents (if any), and market research reports</li>
            <li>Information on founders and key personnel</li>
          </ul>
        </p>
        <h2>12. Collaborations with Academic or Research Institutions (Optional but Advantageous)</h2>
        <p>
          Partnerships with AYUSH academic institutions or research centers for the development of scientific evidence supporting AYUSH products can be advantageous.
        </p>
        <h2>How to Apply for AYUSH Startup Registration:</h2>
        <p>
          <ul>
            <li>Register the startup on the portal.</li>
            <li>Submit the AYUSH-specific application forms, along with necessary documentation, as required by the Ministry of AYUSH or its designated funding bodies.</li>
            <li>Leverage incubation centers or accelerators that specifically cater to the AYUSH industry for mentorship and additional support.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Eligibility;