import { Container } from 'react-bootstrap';
import '../index.css';
import Navbar from "../components/Navbar";
import Features from '../components/Features';
import Footer from '../components/Footer';
import AccordionCard from '../components/Accordion';
import Banner from '../components/Banner';


const Services = () => {
  return (
    <div>
        <Navbar />
        <header className="header-services">
      <Container>
        <div className="header-content">
        </div>
      </Container>
    </header>
    <Container>
    <Features />
    </Container>
    <AccordionCard />
   <Banner />
    <Footer />
    </div>
  );
};

export default Services;



