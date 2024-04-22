import { Container, Button } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar';
import '../index.css';
import Solutions from './Solutins';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <header className=" hero-bg">
        <div className="row">
        <Container>
          <div className="col-sm-6 hero-content">
            <h1 className='hero-title'>Empowering your <br />Business Transformation.</h1>
            <p className='hero-text'>We bring people and technology together to deliver <br />
            tailored Business solutions. Our experts simplify the <br />
            complex to help you achieve your goals.</p>
            <Button variant="light" className='rounded-lg'>Explore More</Button>
          </div>  
          </Container>  
        </div>
      </header>
      <Solutions />
    </>
  );
};

export default Home;
