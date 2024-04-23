import { Container, Accordion } from 'react-bootstrap';
import '../index.css'; 

const AccordionCard = () => {
  return (
    <Container>
      <div className='features-box'>
        <h2 className='sub-title'>Add-Ons to your Business</h2>
        <Accordion defaultActiveKey='0' className='mt-5 p-3'>
          <Accordion.Item eventKey='0' className='item'>
            <Accordion.Header>Business Analysis</Accordion.Header>
            <Accordion.Body>
              Our comprehensive business analysis helps you identify strengths, weaknesses, opportunities, and threats in your business environment. We provide actionable insights to optimize your strategies and drive growth.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1' className='item'>
            <Accordion.Header>Marketing Strategy</Accordion.Header>
            <Accordion.Body>
              Develop an effective marketing strategy tailored to your target audience and business objectives. From market research to campaign execution, we help you reach and engage your customers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2' className='item'>
            <Accordion.Header>Financial Planning</Accordion.Header>
            <Accordion.Body>
              Our financial planning services assist you in budgeting, forecasting, and managing your finances effectively. We ensure financial stability and guide you towards sustainable growth.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3' className='item'>
            <Accordion.Header>Technology Integration</Accordion.Header>
            <Accordion.Body>
              Leverage the latest technologies to streamline operations, enhance productivity, and deliver superior customer experiences. Our experts guide you through the process of technology integration for maximum impact.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4' className='item'>
            <Accordion.Header>Training and Development</Accordion.Header>
            <Accordion.Body>
              Invest in your team's skills and capabilities with our training and development programs. We offer customized training sessions to empower your employees and drive organizational success.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  )
};

export default AccordionCard;