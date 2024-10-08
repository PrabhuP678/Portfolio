import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/prabhu-prasad-panda-2394332b7/"><img src={navIcon1} alt="LinkedIn Icon" /></a>
              <a href="https://www.facebook.com/"><img src={navIcon2} alt="Facebook Icon" /></a>
              {/* Replace the anchor with a button for non-navigable items */}
              <button onClick={() => alert('No link available yet')} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img src={navIcon3} alt="Placeholder Icon" />
              </button>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
