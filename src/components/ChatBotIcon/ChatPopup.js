import React, { useState, useEffect } from 'react';
import './ChatBotIcon.css'; // Import the CSS file

function ChatPopup({ chatVisible, toggleChatbot }) {
  const [userInput, setUserInput] = useState('');
  const [chatbotResponse, setChatbotResponse] = useState('Send "Hi" to start a conversation!');
  const [showOptions, setShowOptions] = useState(false);
  const [showInitialHiButton, setShowInitialHiButton] = useState(true); // New state for initial "Hi" button
  const [awaitingUserConfirmation, setAwaitingUserConfirmation] = useState(false); // To handle the loop for "Ask anything else?"

  // Handles sending the message
  const sendMessage = () => {
    const validGreetings = ['hey', 'hi', 'hello', 'how are you', 'good morning', 'good evening', 'good afternoon', 'hii'];
    const userResponse = userInput.trim().toLowerCase();

    if (userInput.trim()) {
      if (awaitingUserConfirmation) {
        if (userResponse === 'yes') {
          // If the user wants to ask more questions, show the options again
          setChatbotResponse('Please choose from the following options:');
          setShowOptions(true);
        } else {
          // If the user says something other than "yes", end the chat
          setChatbotResponse('Thank you for chatting! If you have more questions, feel free to ask later.');
          setShowOptions(false);
          setAwaitingUserConfirmation(false);
        }
      } else {
        if (validGreetings.includes(userResponse)) {
          setChatbotResponse('Hello! Please choose from the following options:');
          setShowOptions(true);
          setShowInitialHiButton(false); // Remove Hi button after greeting
        } else {
          setChatbotResponse('Please enter a valid response to start the chat.');
          setShowOptions(false);
        }
      }
      setUserInput(''); // Clear the input after sending
    }
  };

  // Handles selecting an option
  const handleOptionSelect = (option) => {
    switch (option) {
      case 'AYUSH Startup Registration':
        setChatbotResponse(
          <>
            <strong>AYUSH Startup Registration Information:</strong>
            <p>
              AYUSH startup registration is aimed at promoting innovation and entrepreneurship in the AYUSH sector. 
              To register, you must first provide your basic details such as name, D.O.B, Address, etc. Then you have to fill details such as the Name of the Startup, nature of your startup, founders' and other key members' details, Abstract, business model, Scalability in Indian Market, Verify your identity, and compliance with AYUSH standards. 
              The initiative offers mentorship, financial assistance, and helps startups scale in the wellness and healthcare sectors related to Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy.
            </p>
          </>
        );
        break;
      case 'AYUSH Stakeholder Registration':
        setChatbotResponse(
          <>
            <strong>AYUSH Stakeholder Registration Information:</strong>
            <p>
              AYUSH Stakeholder registration allows individuals and organizations involved in the AYUSH ecosystem to collaborate and network. 
              Stakeholders include healthcare professionals, Investors (Venture Capitalists, Angel Investors), manufacturers, researchers, and institutions, Government bodies or regulatory agencies that facilitate the growth of AYUSH through policy implementation.
              Non-Governmental Organizations (NGOs) or non-profits working in the wellness, public health, or AYUSH sectors. 
              The platform facilitates access to resources, government schemes, and updates in the AYUSH sector, helping stakeholders contribute to the growth and innovation in AYUSH practices.
            </p>
          </>
        );
        break;
      case 'Startup Guidelines':
        setChatbotResponse(
          <>
            <strong>AYUSH Startup Guidelines:</strong>
            <p>
              The AYUSH Startup Guidelines provide a structured approach for new businesses in the wellness and traditional medicine sectors. 
              Startups must align with AYUSH regulatory standards, including obtaining necessary licenses, adhering to quality control protocols, and ensuring compliance with both national and international healthcare regulations. 
              The guidelines also outline available government schemes, funding opportunities, and support structures for startups in this field.
            </p>
          </>
        );
        break;
      case 'AYUSH Initiatives':
        setChatbotResponse(
          <>
            <strong>AYUSH Initiatives:</strong>
            <p>
              The AYUSH ministry has launched several initiatives to promote traditional systems of medicine and wellness. 
              These initiatives include financial support for AYUSH startups, establishing AYUSH centers globally, promoting research and development in Ayurveda and alternative medicine, and fostering international collaboration. 
              They aim to make AYUSH practices mainstream in healthcare systems and improve public health through time-tested traditional methods.
            </p>
          </>
        );
        break;
      case 'How to Check Eligibility':
        setChatbotResponse(
          <>
            <strong>Eligibility Criteria for AYUSH Startup Registration:</strong>
            <p>
              To check your eligibility for AYUSH Startup Registration, you need to meet the following criteria:
              <ul>
                <li>You must be an Indian citizen or a legal entity registered in India.</li>
                <li>Your startup should focus on one or more AYUSH fields like Ayurveda, Yoga, Naturopathy, Unani, Siddha, or Homeopathy.</li>
                <li>Your startup should have a clear business plan, a viable product/service, and a scalable business model.</li>
                <li>The startup should aim to bring innovation, promote public health, or enhance wellness using AYUSH methodologies.</li>
              </ul>
              <strong>Eligibility Criteria for AYUSH Stakeholder Registration:</strong>
              <ul>
                <li>Individuals, companies, or organizations involved in AYUSH practices, research, or manufacturing.</li>
                <li>Investors interested in the wellness or healthcare sectors related to AYUSH.</li>
                <li>Government agencies, NGOs, or non-profit organizations working in the public health or wellness sector.</li>
              </ul>
              If you meet these criteria, you can proceed with the registration process on the platform.
            </p>
          </>
        );
        break;
      default:
        setChatbotResponse('Invalid option selected.');
        break;
    }

    // Ask if the user wants to ask anything else after the response
    setShowOptions(false);
    setAwaitingUserConfirmation(true);
    setChatbotResponse((prev) => (
      <>
        {prev}
        <p>Do you want to ask anything else? (yes/no)</p>
      </>
    ));
  };

  // Clears the chat area
  const clearChat = () => {
    setUserInput('');
    setChatbotResponse('Send "Hi" to start a conversation!');
    setShowOptions(false);
    setShowInitialHiButton(true); // Show Hi button again after clearing chat
    setAwaitingUserConfirmation(false);
  };

  // Handles the "Hi" button click
  const handleHiButtonClick = () => {
    setUserInput('Hi');
    sendMessage();
  };

  return (
    chatVisible && (
      <div className="chatbox-style">
        <div className="chat-header-style">
          <h3>AYUSH Startup Chat</h3>
          <div role="button" onClick={toggleChatbot} className="close-button-style">
            X
          </div>
        </div>
        <div className="chat-area-style">
          {chatbotResponse && <p><strong>Bot:</strong> {chatbotResponse}</p>}
        </div>

        {showInitialHiButton && (
          <div className="initial-hi-container">
            <div role="button" onClick={handleHiButtonClick} className="hi-button-style">
              Hi
            </div>
          </div>
        )}

        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message"
          className="input-style"
        />
        <div className="button-container-style">
          <div role="button" onClick={sendMessage} className="send-button-style">
            Send
          </div>
          <div role="button" onClick={clearChat} className="clear-button-style">
            Clear
          </div>
        </div>

        {showOptions && (
          <div className="options-style">
            <div role="button" onClick={() => handleOptionSelect('AYUSH Startup Registration')} className="option-button-style">
              Option 1: AYUSH Startup Registration
            </div>
            <div role="button" onClick={() => handleOptionSelect('AYUSH Stakeholder Registration')} className="option-button-style">
              Option 2: AYUSH Stakeholder Registration
            </div>
            <div role="button" onClick={() => handleOptionSelect('Startup Guidelines')} className="option-button-style">
              Option 3: Startup Guidelines
            </div>
            <div role="button" onClick={() => handleOptionSelect('AYUSH Initiatives')} className="option-button-style">
              Option 4: AYUSH Initiatives
            </div>
            <div role="button" onClick={() => handleOptionSelect('How to Check Eligibility')} className="option-button-style">
              Option 5: How to Check Eligibility
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default ChatPopup;
