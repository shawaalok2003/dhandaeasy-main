import { Container, Row, Col, Image } from 'react-bootstrap';
import '../index.css';
import Navbar from "../components/Navbar";
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
     <Navbar />
        <header className="header-about">
      <Container>
        <div className="header-content">
          <h1 className="header-title"></h1>
        </div>
      </Container>
    </header>
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <br/>
          <h2 className='about-title'>Our Mission</h2>
          <p>
          <b>DhandaEasy</b>, is a business consultancy firm founded in 2024 with a clear mission: to empower entrepreneurs and startups to turn their business plans into successful ventures. We have no legacy, but we are committed to making a significant impact in the business world.
          <br/>
          <br/>
          <b>DhandaEasy</b> we prioritize simplicity and effectiveness. Our approach is straightforward – we help you navigate the complexities of starting and scaling a business while ensuring that you have the resources and support needed to thrive. Whether you're just starting out or looking to grow your existing business, we're here to help you achieve your goals.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Image src="../src/assets/images/about.jpeg" alt="About" fluid className="about-image" />
        </Col>
      </Row>
    </Container>
    <Banner />
    <Footer />
    </>
  )
}

export default About;
