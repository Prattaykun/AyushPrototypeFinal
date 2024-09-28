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

  
    const [selectedOption, setSelectedOption] = useState('startup');
  
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };
  

  const startupEligibility = (
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
  );

  const stakeholdersEligibility = (
    <div className="about-us-box">
      <h1>Stakeholders</h1>
      <h2>Criteria:</h2>
      <p>
        To become a stakeholder in the AYUSH Startup Registration program, the criteria typically align with contributing to or supporting startups that promote and innovate within the AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy) sector. Stakeholders could be individuals, organizations, or institutions that are part of the larger AYUSH ecosystem, providing resources, services, or expertise to the startups. Below are the typical criteria for becoming an AYUSH stakeholder:
      </p>
      <h3>1. Type of Stakeholders</h3>
      <ul>
        <li>Incubators and Accelerators with a focus on supporting AYUSH-based startups.</li>
        <li>Academic Institutions and Research Centers that contribute to scientific research and innovation in AYUSH practices.</li>
        <li>Healthcare Providers, hospitals, or clinics that integrate AYUSH systems into their offerings.</li>
        <li>Investors (Venture Capitalists, Angel Investors) who fund and support AYUSH startups.</li>
        <li>An individual/ entity/ company of India or,</li>
        <li>A foreign entity having at-least one registered office in India.</li>
        <li>Manufacturers of AYUSH products, including herbal medicines, supplements, and wellness products.</li>
        <li>Training Institutes that offer education and skill development in the field of AYUSH.</li>
        <li>Industry Experts who can provide technical support, mentoring, or domain expertise.</li>
        <li>Government bodies or regulatory agencies that facilitate the growth of AYUSH through policy implementation.</li>
        <li>Non-Governmental Organizations (NGOs) or non-profits working in the wellness, public health, or AYUSH sectors.</li>
      </ul>
      <h3>2. Contribution to the AYUSH Ecosystem:</h3>
      <p>
        Incubators/Accelerators: Should be recognized entities that offer incubation or acceleration programs for AYUSH startups, providing them with mentorship, access to facilities, and business development support.
      </p>
      <p>
        Research Institutions/Academic Partners: Should focus on research, development, and validation of AYUSH practices, creating scientific backing for products and services.
      </p>
      <p>
        Investors: Venture capitalists and angel investors should demonstrate an interest in the AYUSH sector, with a track record of investments in health and wellness, traditional medicine, or related industries.
      </p>
      <p>
        Manufacturers/Service Providers: Stakeholders should have a legitimate setup for manufacturing or distributing AYUSH products or services and comply with AYUSH standards.
      </p>
      <h3>3. Alignment with AYUSH Principles:</h3>
      <p>
        The stakeholder must demonstrate a commitment to AYUSH principles, whether through research, product development, service offerings, or investment. This includes a focus on sustainable practices, promoting holistic health and wellness, and preserving traditional knowledge systems.
      </p>
      <p>
        Collaborations should aim to develop and promote AYUSH products, therapies, and treatments that align with government-approved guidelines.
      </p>
      <h3>4. Compliance with AYUSH Guidelines and Certifications:</h3>
      <p>
        Manufacturers and service providers should adhere to AYUSH regulations and standards for the production, marketing, and distribution of AYUSH products. This includes ensuring proper GMP (Good Manufacturing Practices) and acquiring necessary certifications from regulatory bodies like the Ministry of AYUSH.
      </p>
      <p>
        Healthcare Providers should follow AYUSH-prescribed treatment guidelines and maintain certification/accreditation with appropriate councils (such as the Central Council for Research in Ayurvedic Sciences or Central Council for Research in Homoeopathy).
      </p>
      <h3>5. Network and Support for Startups:</h3>
      <p>
        Stakeholders should actively support the AYUSH startup ecosystem by offering resources, funding, or mentorship. This could include:
      </p>
      <ul>
        <li>Access to labs, equipment, or manufacturing facilities.</li>
        <li>Financial investments or grants.</li>
        <li>Technical or business mentoring.</li>
        <li>Partnership in research or clinical trials for AYUSH products.</li>
      </ul>
      <h3>6. Engagement with AYUSH Incubation Centers:</h3>
      <p>
        AYUSH stakeholders may collaborate with or be part of AYUSH Incubation Centers supported by the Ministry of AYUSH and institutions like Atal Innovation Mission (AIM). These centers help startups with product development, R&D, and business strategies.
      </p>
      <h3>7. Documentation and Registration:</h3>
      <p>
        Stakeholders should be registered under the appropriate business or professional category (such as healthcare provider, investor, manufacturer, or educational institution). Necessary documentation may include:
      </p>
      <ul>
        <li>Proof of incorporation/registration.</li>
        <li>Certifications and licenses (e.g., GMP for manufacturers, AYUSH certification for healthcare providers).</li>
        <li>Business plans or detailed proposals outlining contributions to the AYUSH sector.</li>
        <li>Proof of prior engagements, investments, or collaborations in the AYUSH ecosystem.</li>
      </ul>
      <h3>8. Focus on Innovation and Commercialization:</h3>
      <p>
        Stakeholders should demonstrate their capacity to promote innovation and commercialization within the AYUSH sector. This could include:
      </p>
      <ul>
        <li>Research partnerships for product innovation.</li>
        <li>Investments in cutting-edge AYUSH technologies (e.g., digital health apps, telemedicine platforms).</li>
        <li>Development of AYUSH-based nutraceuticals, cosmeceuticals, or wellness tourism models.</li>
      </ul>
      <h3>9. Government or AYUSH Ministry Collaboration:</h3>
      <p>
        Many stakeholders may collaborate with AYUSH Ministry initiatives or policies, providing their expertise, services, or resources. These stakeholders should demonstrate alignment with government programs, policies, and public health initiatives focused on promoting AYUSH practices.
      </p>
      <h3>Which are the already Funding Agencies?</h3>
      <ul>
        <li>Department of Ayurveda, Yoga & Naturopathy, Unani, Siddha and Homeopathy (AYUSH). <a href="https://ayush.gov.in/#!/">LINK</a></li>
        <li>Central Council for Research in Ayurvedic Sciences (CCRAS) <a href="https://ccras.nic.in/">LINK</a></li>
        <li>National Medicinal Plants Board (NMPB) <a href="http://nmpb.nic.in/">LINK</a></li>
        <li>Department of Biotechnology (DBT) <a href="http://dbtindia.gov.in/">LINK</a></li>
        <li>Department of Science and Technology (DST) <a href="http://dst.gov.in/">LINK</a></li>
        <li>Indian Council of Medical Research (ICMR) <a href="http://icmr.gov.in/">LINK</a></li>
      </ul>
    </div>
  );





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
     
      <select className="check-elg" value={selectedOption} onChange={handleSelectChange}>
        <option value="startup">Startup Eligibility</option>
        <option value="stakeholders">Stakeholders Eligibility</option>
      </select>
      <div className="about-us-box">
        {selectedOption === 'startup' ? startupEligibility : stakeholdersEligibility}
      </div>
    </div>
  );
};

export default Eligibility;