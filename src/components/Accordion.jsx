import { Container, Accordion } from 'react-bootstrap';
import '../index.css'; 

const AccordionCard = () => {
  return (
    <>
    <Container>
    <div className='features-box'>
    <h2 className='sub-title'>Add-Ons to your Business</h2>
    <Accordion defaultActiveKey='0' className='mt-5 p-3'>
        <Accordion.Item eventKey='0' className='item'>
            <Accordion.Header>Something</Accordion.Header>
            <Accordion.Body>Something Badumtss...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2' className='item'>
            <Accordion.Header>Something</Accordion.Header>
            <Accordion.Body>Something Badumtss...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3' className='item'>
            <Accordion.Header>Something</Accordion.Header>
            <Accordion.Body>Something Badumtss...
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4' className='item'>
            <Accordion.Header>Something</Accordion.Header>
            <Accordion.Body>Something Badumtss...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='5' className='item'>
            <Accordion.Header>Something</Accordion.Header>
            <Accordion.Body>Something Badumtss...</Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    </Container>

    </>
  )
};

export default AccordionCard;
