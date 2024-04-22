import { Card, Row, Col} from 'react-bootstrap';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBullseye, faChartSimple, faGamepad, faTags, faTimeline } from '@fortawesome/free-solid-svg-icons';

export const Features = () => {
    return (
    <div>

    <div className='features-box'>
    <h2 className='sub-title'>Our Key Differentiators</h2>
    <Row className="justify-content-center mb-4">
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <FontAwesomeIcon icon={faChartSimple} style={{color: "#1077c6",}} className="icons" />
              <Card.Title>Statitics</Card.Title>
              <Card.Text>
              Guaranteed Superior Analysis<br/>
              Focussing on <b>SWOT!</b> 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <FontAwesomeIcon icon={faBullseye} style={{color: "#1077c6",}} className="icons" />
              <Card.Title>Something</Card.Title>
              <Card.Text>
              Something yada yada
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <FontAwesomeIcon icon={faTimeline} style={{color: "#1077c6",}} className="icons" />
              <Card.Title>Something</Card.Title>
              <Card.Text>
              Something Yada yada
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row className="justify-content-center">
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <FontAwesomeIcon icon={faBriefcase} style={{color: "#1077c6",}} className="icons" />
              <Card.Title>Something</Card.Title>
              <Card.Text>
              Something Yada yada
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <FontAwesomeIcon icon={faTags} style={{color: "#1077c6",}} className="icons" />
              <Card.Title>Something</Card.Title>
              <Card.Text>
              Something Yada yada
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <FontAwesomeIcon icon={faGamepad} style={{color: "#1077c6",}} className="icons" />
              <Card.Title>Something</Card.Title>
              <Card.Text>
              Something Yada yada
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </div>
            </div>
          )
        }

        export default Features;
        