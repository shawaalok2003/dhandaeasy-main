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
          <h1 className="header-title">About</h1>
        </div>
      </Container>
    </header>
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <br/>
          <h2 className='about-title'>Our Mission</h2>
          <p>
          <b>DhandaEasy</b>, founded in 2024, has no legacy!
          <br/>
          <br/>
          <b>DhandaEasy</b> has made it their priority to just Netflix & Chill...
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
