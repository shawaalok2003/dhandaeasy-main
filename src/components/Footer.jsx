import { Container, Row, Col } from 'react-bootstrap';
import 'boxicons'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo title */}
          <Col xs={12} md={3}>
            <h1>DhandaEasy</h1>
          </Col>
          {/* Services section */}
          <Col xs={12} md={3}>
            <h5>Services</h5>
            <div className='services'>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            </div>
          </Col>
          {/* Contact section */}
          <Col xs={12} md={3}>
            <h5>Contact</h5>
            <p><box-icon name='phone'></box-icon>Phone: Keu Tulbena...</p>
            <p><box-icon type='solid' name='stopwatch'></box-icon>Mon - Fri: Dare if you call us!</p>
            <p><box-icon type='solid' name='envelope'></box-icon>dhandaeasy@gmail.com</p>
            <p><box-icon type='solid' name='location-plus'></box-icon>Kolkata, West Bengal, India</p>
          </Col>
        </Row>
        <p className='copyright'>Copyright @ 2024 DhandaEasy</p>
      </Container>
    </footer>
  );
};

export default Footer;
