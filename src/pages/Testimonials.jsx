import { Container, Carousel} from 'react-bootstrap';

const Testimonials = () => {
  return (
    <>
    <div className='testimonial-box'>
    <h2 className='sub-title'>Testimonials(fake)</h2>
    <Container>
      <Carousel interval={4000} pause={false}>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="testimonial-card">
            <blockquote>
        <p>They provide us with Nothing. LOL!</p>
            </blockquote>
              <h6>Sun Tzu</h6>
              <p>CEO, Art of War</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="testimonial-card">
            <blockquote>           
              <p>The team is incompetent....Screw em!</p>
              </blockquote>
              <h6>Lao Tzu</h6>
              <p>CTO, Brother of Sun Tzu</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
    </div>
   
    </>
  );
};

export default Testimonials;
