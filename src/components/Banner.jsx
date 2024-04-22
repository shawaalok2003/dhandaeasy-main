import { Container, Row, Col, Button } from 'react-bootstrap';
import '../index.css';

export const Banner = () => {
  return (
    <div> <div className='cta-banner'>
    <Container fluid className="banner">
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <div className="banner-content">
            <h1>Interested in how your Business Solutions measure up?</h1>
            <p>One Suggestion...DONT!</p>
            <Button variant="primary" size="lg">Enquire Uselessly</Button>
          </div>
        </Col>
      </Row>
    </Container>
    </div></div>
  )
}

export default Banner;
