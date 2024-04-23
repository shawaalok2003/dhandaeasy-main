import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBullseye, faChartSimple, faGamepad, faTags, faTimeline } from '@fortawesome/free-solid-svg-icons'

const Features = () => {
  return (
    <div>
      <div className='features-box'>
        <h2 className='sub-title'>Our Key Differentiators</h2>
        <Row className="justify-content-center mb-4">
          <Col sm={10} md={6} lg={4} className="mb-4">
            <Card border="light">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faChartSimple} style={{ color: "#1077c6" }} className="icons" />
                <Card.Title>Statistics</Card.Title>
                <Card.Text>
                  Guaranteed Superior Analysis<br />
                  Focusing on <b>SWOT!</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={10} md={6} lg={4} className="mb-4">
            <Card border="light">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faBullseye} style={{ color: "#1077c6" }} className="icons" />
                <Card.Title>Targeted Solutions</Card.Title>
                <Card.Text>
                  Tailored solutions designed to meet your specific business needs and goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={10} md={6} lg={4} className="mb-4">
            <Card border="light">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faTimeline} style={{ color: "#1077c6" }} className="icons" />
                <Card.Title>Strategic Planning</Card.Title>
                <Card.Text>
                  Strategic planning and execution to drive long-term business success and growth.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={10} md={6} lg={4} className="mb-4">
            <Card border="light">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faBriefcase} style={{ color: "#1077c6" }} className="icons" />
                <Card.Title>Industry Expertise</Card.Title>
                <Card.Text>
                  In-depth industry expertise and knowledge to guide informed decision-making.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={10} md={6} lg={4} className="mb-4">
            <Card border="light">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faTags} style={{ color: "#1077c6" }} className="icons" />
                <Card.Title>Cost-Effective Solutions</Card.Title>
                <Card.Text>
                  Cost-effective solutions that deliver maximum value and ROI for your business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={10} md={6} lg={4} className="mb-4">
            <Card border="light">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faGamepad} style={{ color: "#1077c6" }} className="icons" />
                <Card.Title>Interactive Collaboration</Card.Title>
                <Card.Text>
                  Interactive collaboration and communication throughout the project lifecycle.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Features;