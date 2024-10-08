import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";  // existing image
import mailIcon from "../assets/img/gmail-660_040119014433.avif"; // mail icon image
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails); // Reset form after submission

      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setButtonText("Send");
      setStatus({ success: false, message: 'An error occurred. Please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <p>
                    You can reach me via email by clicking the mail icon below:
                  </p>
                  {/* Enhanced inline CSS for the mail icon */}
                  <a href="mailto:prabhuprasadpanda08@gmail.com">
                    <img
                      src={mailIcon}
                      alt="Email Icon"
                      style={{
                        width: '60px',       // Increased size for better visibility
                        cursor: 'pointer',   // Indicate it's clickable
                        marginTop: '10px',   // Add space above
                        border: '2px solid #007bff', // Blue border
                        borderRadius: '50%',  // Circular shape
                        padding: '10px',      // Extra padding for spacious look
                        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)', // Enhanced shadow for depth
                        transition: 'transform 0.3s ease, border-color 0.3s ease', // Smooth transitions for scale and color
                        backgroundColor: '#f9f9f9'  // Light background for contrast
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';  // Slightly enlarge the icon
                        e.currentTarget.style.borderColor = '#ff5733';  // Change border color on hover
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';  // Return to normal size
                        e.currentTarget.style.borderColor = '#007bff';  // Return to original border color
                      }}
                    />
                  </a>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
