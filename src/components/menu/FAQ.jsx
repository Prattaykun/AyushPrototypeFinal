import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const generalFAQs = [
    {
      question: "How do I create an account?",
      answer:
        'To create an account, click on the "Register" button on the homepage and fill out the required information. Once completed, verify your email to activate your account.',
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        'Click the "Forgot Password" link on the login page. Enter your registered email, and we will send you instructions to reset your password.',
    },
    {
      question: "Can I update my personal or business information?",
      answer:
        "Yes, you can update your profile by logging into your account and editing the necessary fields.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard encryption and security protocols to ensure that your data is protected.",
    },
    {
      question:
        "What should I do if I encounter technical issues during registration or login?",
      answer:
        "You can contact our technical support team via email or call us at +91 1234 567 890.",
    },
    {
      question: "Can I access the portal from mobile devices?",
      answer:
        "Yes, our portal is mobile-friendly and can be accessed from any device with an internet connection.",
    },
  ];

  const startupFAQs = [
    {
      question: "What documents are required to register my startup?",
      answer:
        "You will need your company registration certificate, tax identification number, and other relevant legal documents.",
    },
    {
      question: "Can I submit applications for government grants or licenses?",
      answer:
        "Yes, once registered, you will have access to various services, including applications for grants and licenses.",
    },
    {
      question: "What happens after I register my startup?",
      answer:
        "After completing registration, your details will be reviewed, and you will receive a confirmation email once your account is approved.",
    },
    {
      question: "Can I track the status of my applications?",
      answer:
        'Yes, you can view the status of your applications in the "My Applications" section of your dashboard.',
    },
  ];

  const regulatorFAQs = [
    {
      question: "How do I register as a regulator or stakeholder?",
      answer:
        "Registration is handled by the portal admin. Once your credentials are issued, you can log in using the Stakeholder Login section.",
    },
    {
      question: "What types of data can I access?",
      answer:
        "You will have access to relevant reports, compliance documents, and performance metrics necessary for regulatory review.",
    },
    {
      question: "Can I provide feedback or suggest changes?",
      answer:
        "Yes, there is a feedback feature within the portal for submitting comments or suggestions related to startups.",
    },
    {
      question: "How can I monitor compliance or license submissions?",
      answer:
        'Navigate to the "Compliance" section to track submissions, review documents, and monitor compliance status.',
    },
  ];

  const technicalSupportFAQs = [
    {
      question: "What should I do if the portal is not loading?",
      answer:
        "Try clearing your browser cache or switching to a different browser. If the problem persists, check your internet connection or contact technical support.",
    },
    {
      question: "Why am I seeing an error while uploading documents?",
      answer:
        "Ensure the document format is supported and doesn't exceed the maximum file size limit. If the issue continues, contact support.",
    },
    {
      question: "How can I report a bug or issue?",
      answer:
        "Submit a bug report through the Help section or email our support team.",
    },
  ];

  const securityFAQs = [
    {
      question: "How is my data protected?",
      answer:
        "We use SSL encryption and follow industry best practices for securing your data.",
    },
    {
      question: "Who has access to my personal and business information?",
      answer:
        "Only authorized personnel, such as government officials and relevant stakeholders, have access to your information.",
    },
    {
      question: "Can I delete my account?",
      answer:
        "Yes, you can delete your account by contacting support or going to Account Settings and selecting the delete option.",
    },
  ];

  const renderFAQs = (faqs) =>
    faqs.map((faq, index) => (
      <div className="faq-item" key={index}>
        <div className="faq-question" onClick={() => toggleFAQ(index)}>
          {faq.question}
        </div>
        <div className={`faq-answer ${activeIndex === index ? "active" : ""}`}>
          {faq.answer}
        </div>
      </div>
    ));

  return (
    <div className="faq-container">
      <h2>General FAQs for All Users</h2>
      {renderFAQs(generalFAQs)}

      <h2>For Startups/Business Users</h2>
      {renderFAQs(startupFAQs)}

      <h2>For Regulators/Stakeholders</h2>
      {renderFAQs(regulatorFAQs)}

      <h2>Technical Support and Troubleshooting</h2>
      {renderFAQs(technicalSupportFAQs)}

      <h2>Security and Privacy</h2>
      {renderFAQs(securityFAQs)}
    </div>
  );
};

export default FAQ;
