import React, {useEffect} from 'react';
import { getFirestore, collection, doc, getDoc,getDocs, addDoc, updateDoc, deleteDoc,deleteField, } from "firebase/firestore";
import { app, db} from "../../firebase";
import { getAuth, onAuthStateChanged, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import '../Home/HomePage.css';

const StakeDashboard = () => {
    const db = getFirestore(app);
    const auth = getAuth(app);
    const navigate = useNavigate();


  // Function to check the logged-in user's role
  const checkUserRole = async (uid) => {
    const userDoc = await getDoc(doc(db, "roles", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.role;
    }
    return null;
  };

  // Check user role on component mount
  useEffect(() => {
    const checkRole = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const role = await checkUserRole(user.uid);
          if (role !== "stakeholder") {
            navigate("/RoleSelect");
          }
        } else {
          navigate("/RoleSelect");
        }
      });
    };
    checkRole();
  }, [navigate]);


  return (
    <div className="stake-dashboard">
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
        <li>Department of Ayurveda, Yoga & Naturopathy, Unani, Siddha and Homeopathy (AYUSH). <a href="https://ayush.gov.in/#!/">https://ayush.gov.in/#!/</a></li>
        <li>Central Council for Research in Ayurvedic Sciences (CCRAS) <a href="https://ccras.nic.in/">https://ccras.nic.in/</a></li>
        <li>National Medicinal Plants Board (NMPB) <a href="http://nmpb.nic.in/">nmpb.nic.in</a></li>
        <li>Department of Biotechnology (DBT) <a href="http://dbtindia.gov.in/">dbtindia.gov.in</a></li>
        <li>Department of Science and Technology (DST) <a href="http://dst.gov.in/">dst.gov.in</a></li>
        <li>Indian Council of Medical Research (ICMR) <a href="http://icmr.gov.in/">icmr.gov.in</a></li>
      </ul>
    </div>
  );
};

export default StakeDashboard;