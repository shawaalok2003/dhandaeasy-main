import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'boxicons';
import '../Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo title */}
          <img src='src/assets/images/DhandaeASY (1).png' alt="DhandaeASY Logo" style={{ width: '250px', height: '250px', }} />
          {/* Services section */}
          <Col xs={12} md={3}>
            <h5>Services</h5>
            <ul className='service-list'>
              <li>Business Planning</li>
              <li>Consulting Services</li>
              <li>Startup Support</li>
              <li>Market Analysis</li>
              <li>Financial Strategies</li>
            </ul>
          </Col>
          {/* Contact section */}
          <Col xs={12} md={3}>
            <h5>Contact</h5>
            <ul className='contact-list'>
              <li><box-icon name='phone'></box-icon> Phone: 6290529857</li>
              <li><box-icon type='solid' name='stopwatch'></box-icon> Mon-Sat 24/7 available</li>
              <li><box-icon type='solid' name='envelope'></box-icon> dhandaeasy@gmail.com</li>
              <li><box-icon type='solid' name='location-plus'></box-icon> Kolkata, West Bengal, India</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className='copyright'>Copyright @ 2024 DhandaEasy</p>
      </Container>
    </footer>
  );
};

export default Footer;