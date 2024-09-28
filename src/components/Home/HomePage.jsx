import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./HomePage.css";
import logo_icon from "../Assets/favicon.png";
import startup_icon from "../Assets/startupindia.jpg";
import watermark from "../Assets/Plants.jpg.jpg";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Notices from "../menu/Notices";
import ccras from "../Assets/ccras.png";
import nmpb from "../Assets/nmpb.png";
import dbt from "../Assets/DBT.png";
import dst from "../Assets/dst.png";
import icmr from "../Assets/icmr.png";



function HomePage() {

  const navigate = useNavigate();
  return (
    <div>
      <main className="main-content">
        {/* New Heading Section */}
        <div className="welcome-heading">
          <h1>AYUSH Startup Registration Portal</h1>
        </div>
        <div className="watermark">
          <img src={watermark} alt="water" />
        </div>
        <Container className="custom-container">
      <div className="custom-embed">
        <iframe 
          width="640" 
          height="360" 
          src="https://www.youtube.com/embed/RPqgNibeKEI"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </Container>

        <section className="about-us">
          <div className="about-us-box">
            <h2>About Us</h2>
            <p>
              <b>
                The <strong>Ministry of Ayush</strong> was formed in 2014 to
                provide a dedicated focus on India’s traditional systems of
                medicine and holistic healthcare. Its core mission is to promote
                and develop the practices of{" "}
                <strong>
                  Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy
                  (AYUSH)
                </strong>
                , which have been integral to India’s healthcare heritage for
                centuries. The ministry works on several fronts:
              </b>
              <ul>
                <li>
                  <strong>Regulation and Standardization</strong>: It ensures
                  the safety, efficacy, and quality of AYUSH medicines and
                  practices by setting standards and promoting scientific
                  research.
                </li>
                <li>
                  <strong>Education and Training</strong>: The ministry oversees
                  educational institutions, ensuring quality training for
                  practitioners of AYUSH disciplines, and encourages the
                  incorporation of these systems into the mainstream healthcare
                  sector.
                </li>
                <li>
                  <strong>Public Health Programs</strong>: It runs awareness
                  campaigns, community programs, and wellness centers to promote
                  preventive and alternative healthcare practices.
                </li>
                <li>
                  <strong>Global Promotion</strong>: Ayush collaborates with
                  international organizations to promote India’s traditional
                  medical systems globally, establishing AYUSH institutions and
                  programs abroad.
                </li>
                <li>
                  <strong>Support for Innovation</strong>: The ministry
                  encourages entrepreneurship and startups in the wellness and
                  healthcare sector through various schemes and initiatives.
                </li>
              </ul>
              <b>
                By promoting these natural and sustainable healthcare systems,
                the Ministry of Ayush seeks to enhance well-being, reduce
                disease burden, and promote global health alternatives.
              </b>
            </p>
          </div>
        </section>

        <section className="key-initiatives">
          <h2>Key Initiatives</h2>
          <ul>
            <li>Funding Opportunities for Wellness Startups</li>
            <li>Incubation and Mentorship Programs</li>
            <li>Networking with Industry Experts</li>
            <li>Access to Government Grants and Resources</li>
          </ul>
        </section>
         <div>         <h2>Notices</h2>
         </div>
         <Container className="custom-notices">
        {/* Adding Notices Section */}
        <Notices /> {/* Render the Notices component here */}
        </Container>


        <section className="how-to-apply">
          <h2>How to Apply</h2>
          <div className="sub-head">
            Interested startups can apply through our online portal. Simply
            follow the steps:
          </div>
          <ol>
            <li>Register your startup on our portal.</li>
            <li>Submit your proposal and business plan.</li>
            <li>
              Our team will review and get back to you with the next steps.
            </li>
          </ol>
          
          <div className="apply-btn"
           role="button"
           onClick={() => navigate("/RoleSelect")}
           >
            Apply Now
            </div>       
           

        </section>
        <div className="embed-logo">
        <div>
      {/* The anchor tag wraps the image, making it clickable */}
      <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
        <img src={logo_icon} alt="logo icon" style={{ width: '100px', height: 'auto' }} />
      </a>
    </div>
    <div>
      {/* The anchor tag wraps the image, making it clickable */}
      <a href="https://ccras.nic.in/" target="_blank" rel="noopener noreferrer">
        <img src={ccras} alt="ccras" style={{ width: '100px', height: 'auto' }} />
      </a>
    </div>
    <div>
      {/* The anchor tag wraps the image, making it clickable */}
      <a href="https://nmpb.nic.in" target="_blank" rel="noopener noreferrer">
        <img src={nmpb} alt="nmpb" style={{ width: '100px', height: 'auto' }} />
      </a>
    </div>
    <div>
      {/* The anchor tag wraps the image, making it clickable */}
      <a href="https://dbtindia.gov.in" target="_blank" rel="noopener noreferrer">
        <img src={dbt} alt="dbt" style={{ width: '100px', height: 'auto' }} />
      </a>
    </div>
    <div>
      {/* The anchor tag wraps the image, making it clickable */}
      <a href="http://dst.gov.in" target="_blank" rel="noopener noreferrer">
        <img src={dst} alt="dst" style={{ width: '100px', height: 'auto' }} />
      </a>
    </div>
    <div>
      {/* The anchor tag wraps the image, making it clickable */}
      <a href="http://icmr.gov.in" target="_blank" rel="noopener noreferrer">
        <img src={icmr} alt="icmr" style={{ width: '100px', height: 'auto' }} />
      </a>
    </div>

        </div>

        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us at:</p>
          <p>Email: startups@ayush.gov.in</p>
          <p>Phone: +91 1234 567 890</p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
