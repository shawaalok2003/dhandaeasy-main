import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../index.css';
import Navbar from "../components/Navbar";
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../App.css';
const Bootcamp = () => {
    const bootcampPrice = 2000; // Assuming the bootcamp price is 2000 INR

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
    <h1 className="text-center mt-5">Bootcamp Instrutors</h1>

    <Row className="mt-5">
    <Col md={4} className="mb-4">
        <Card>
            <Card.Body>
                <Row>
                    <Col md={6}>
                        <img src='src/assets/images/_DSC0381.JPG' alt="Instructor" className="instructor-image" />
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <Card.Title className="card-title">Aalok Shaw</Card.Title>
                        <Card.Text className="card-text">
                            CEO OF DHANDAEASY AND CO-FOUNDER OF CUTSPAY
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Col>
    <Col md={4} className="mb-4">
        <Card>
            <Card.Body>
                <Row>
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <Card.Title className="card-title">Soumi Guria</Card.Title>
                        <Card.Text className="card-text">
                            CMO OF DHANDAEASY & CO-FOUNDER OF CUTSPAY
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Col>
    <Col md={4} className="mb-4">
    <Card>
        <Card.Body>
            <Row>
                <Col md={6} className="d-flex flex-column justify-content-center">
                    <Card.Title className="card-title">Arittra Bag</Card.Title>
                    <Card.Text className="card-text">
                        CTO OF DHANDAEASY & CO-FOUNDER OF CUTSPAY
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Col>
            </Row>
        </Card.Body>
    </Card>
</Col>
</Row>

    <Row className="mt-5">
        <Col md={6} className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title>Special Offers</Card.Title>
                    <Card.Text>
                        Check out our special offers for bootcamp participants.
                    </Card.Text>
                    <Button variant="primary">View Offers</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col md={6} className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title>Testimonials</Card.Title>
                    <Card.Text>
                        See what our participants have to say about their experience.
                    </Card.Text>
                    <Button variant="primary">Read Testimonials</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>

    <Row className="mt-5">
        <Col md={12}>
            <h2 className="text-center">Bootcamp Price: INR {bootcampPrice}</h2>
            <h2 className="text-center">Benefits of Joining Our Bootcamp</h2>
            <ul>
                <li>Learn from industry experts</li>
                <li>Gain practical skills and knowledge</li>
                <li>Network with other aspiring entrepreneurs</li>
                <li>Receive mentorship and guidance</li>
                <li>Access to exclusive resources and materials</li>

            </ul>

        </Col>
    </Row>
</Container>
    <Banner />
    <Footer />
    </>
  )
}

export default Bootcamp;