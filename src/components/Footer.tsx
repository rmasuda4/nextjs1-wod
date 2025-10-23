'use client';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="mt-auto py-3">
    <Container>
      <Row>
        <Col md={3}>
          <h3>LOCATION</h3>
          <p className="mb-1"><strong>KAILUA</strong></p>
          <p className="mb-1">32 Malinu Ave,</p>
          <p className="mb-1">Kailua, HI 96734</p>
          <p>(808) 261-6733</p>
        </Col>

        <Col md={1} />

        <Col md={4}>
          <h3>BUSINESS HOURS</h3>
          <Row>
            <Col md={6}>
              <p className="mb-1"><strong>Mondays, Wednesdays, Thursdays</strong></p>
              <p className="mb-1">OPEN 4pm - 10pm</p>
              <p className="mb-1">Happy Hour 4pm - 6pm</p>
              <p className="mb-3">Dinner 4pm - 9pm</p>

              <p className="mb-1"><strong>Fridays</strong></p>
              <p className="mb-1">OPEN 4pm - 11pm</p>
              <p className="mb-1">Happy Hour 4pm - 6pm</p>
              <p>Dinner 4pm - 10pm</p>
            </Col>
            <Col md={6}>
              <p className="mb-1"><strong>Saturdays</strong></p>
              <p className="mb-1">OPEN 9am - 11pm</p>
              <p className="mb-1">Brunch 9am - 1pm</p>
              <p className="mb-1">Happy Hour 4pm - 6pm</p>
              <p>Dinner 4pm - 10pm</p>
            </Col>
          </Row>
        </Col>

        <Col md={1} />

        <Col md={3}>
          <h3>SUBSCRIBE</h3>
          <input type="text" className="form-control mb-2" placeholder="First Name" />
          <input type="text" className="form-control mb-2" placeholder="Last Name" />
          <input type="text" className="form-control mb-3" placeholder="Email Address" />
          <button type="button" className="btn btn-light">Sign Up</button>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
