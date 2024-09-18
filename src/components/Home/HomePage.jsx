import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import logo_icon from "../Assets/ayushlogo.jpg";
import startup_icon from "../Assets/startupindia.jpg";
import watermark from "../Assets/herb.jpg";

function HomePage() {
  return (
    <div>
      <main className="main-content">
        {/* New Heading Section */}
        <div className="welcome-heading">
          <h1>AYUSH Startup Registration Porta</h1>
        </div>
        <div className="watermark">
          <img src={watermark} alt="water" />
        </div>
        <div className="image-container">
          <img src={logo_icon} alt="Logo Icon" />
          <img src={startup_icon} alt="Startup Icon" />
        </div>

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
                centuries. The ministry works on several fronts: -{" "}
                <strong>Regulation and Standardization</strong>: It ensures the
                safety, efficacy, and quality of AYUSH medicines and practices
                by setting standards and promoting scientific research. -{" "}
                <strong>Education and Training</strong>: The ministry oversees
                educational institutions, ensuring quality training for
                practitioners of AYUSH disciplines, and encourages the
                incorporation of these systems into the mainstream healthcare
                sector. - <strong>Public Health Programs</strong>: It runs
                awareness campaigns, community programs, and wellness centers to
                promote preventive and alternative healthcare practices. -{" "}
                <strong>Global Promotion</strong>: Ayush collaborates with
                international organizations to promote India’s traditional
                medical systems globally, establishing AYUSH institutions and
                programs abroad. - <strong>Support for Innovation</strong>: The
                ministry encourages entrepreneurship and startups in the
                wellness and healthcare sector through various schemes and
                initiatives. By promoting these natural and sustainable
                healthcare systems, the Ministry of Ayush seeks to enhance
                well-being, reduce disease burden, and promote global health
                alternatives.
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
        <section className="how-to-apply">
          <h2>How to Apply</h2>
          <p>
            Interested startups can apply through our online portal. Simply
            follow the steps:
          </p>
          <ol>
            <li>Register your startup on our portal.</li>
            <li>Submit your proposal and business plan.</li>
            <li>
              Our team will review and get back to you with the next steps.
            </li>
          </ol>
          <Link to="/LoginSignup">
            <button className="apply-btn">Apply Now</button>
          </Link>
        </section>
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
