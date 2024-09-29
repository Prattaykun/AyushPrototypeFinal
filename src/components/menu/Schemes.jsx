import React, { useState } from "react";
import "./Schemes.css"; // Assuming you'll create a custom CSS file for styles

const schemesData = [
  {
    title: "AYURGYAN Scheme",
    description: `The AYURGYAN scheme aims to enhance and develop capacity in the Ayush healthcare sector. It encourages research, education, and the use of information technology.`,
    link: "https://ngo.ayush.gov.in/",
    moreInfo: `The scheme focuses on Continuing Medical Education (CME) in Ayush for professionals like doctors and teachers. It also supports research and innovation in Ayush to validate its approach on a global scale. More details include Ayurveda Biology Integrated Health Research, Research and Development funding, and infrastructure development for Ayush professionals.`,
  },
  {
    title: "Ayurswasthya Yojana",
    description: `Ayurswasthya Yojana is aimed at merging two schemes: Public Health Intervention (PHI) and Centre of Excellence (COE) to provide holistic healthcare solutions.`,
    link: "https://ngo.ayush.gov.in/",
    moreInfo: `The PHI component promotes Ayush interventions for community healthcare and supports national health programs. The COE component focuses on upgrading Ayush facilities and fostering innovation in education, research, and capacity building.`,
  },
  {
    title: "Ayush Oushadhi Gunvatta Evam Uttpadan Samvardhan Yojana",
    description: `This scheme aims to regulate and enhance the quality of Ayurveda, Siddha, Unani, and Homeopathy (ASU&H) medicines through infrastructural and technological improvements.`,
    link: "https://ngo.ayush.gov.in/",
    moreInfo: `It provides financial incentives for equipment upgrades and infrastructure improvements to ensure the quality control and safety of Ayush drugs. It also supports WHO-GMP standards and helps drug manufacturers and testing laboratories meet regulatory requirements.`,
  },
  {
    title: "Conservation, Development and Sustainable Management of Medicinal Plants",
    description: `This scheme promotes the conservation and sustainable use of medicinal plants vital to the Ayush industry.`,
    link: "https://ngo.ayush.gov.in/",
    moreInfo: `The scheme supports farmers, joint forest management committees, and self-help groups by providing financial assistance for sustainable cultivation practices, post-harvest management, and marketing activities. The project is vital for preserving plant species and supporting rural livelihoods.`,
  },
];

const SchemeCard = ({ title, description, link, moreInfo }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div
          role="button"
          className="togg-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? "Show Less" : "Read More"}
        </div>
        {open && <p className="card-more-info">{moreInfo}</p>}
        <div
          role="button"
          className="ply-button"
          onClick={() => window.open(link, "_blank")}
        >
          Apply
        </div>
      </div>
    </div>
  );
};

const Schemes = () => {
  return (
    <div className="container">
      <h1 className="custom-underline">Government Schemes</h1>
      {schemesData.map((scheme, index) => (
        <SchemeCard
          key={index}
          title={scheme.title}
          description={scheme.description}
          link={scheme.link}
          moreInfo={scheme.moreInfo}
        />
      ))}
    </div>
  );
};

export default Schemes;
