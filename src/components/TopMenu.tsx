'use client';

import { Container, Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';

const TopMenu = () => (
  <Navbar expand="lg" bg="light" className="fixed-top">
    <Container>
      <Navbar.Brand href="#">
        <Image src="/wod-banyans-logo.png" width={220} height={60} alt="Banyans Kailua Logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarContent" />

      <Navbar.Collapse id="navbarContent">
        <Nav className="ms-auto flex-row flex-wrap justify-content-center align-items-center w-100">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Banyans Menu</Nav.Link>
          <Nav.Link href="#">Reservations</Nav.Link>
          <Nav.Link href="#">Events</Nav.Link>
          <Nav.Link href="#">Gift Cards</Nav.Link>
          <Nav.Link href="#"><i className="bi bi-instagram" /></Nav.Link>
          <Nav.Link href="#"><i className="bi bi-facebook" /></Nav.Link>
          <Nav.Link href="#"><i className="bi bi-twitter-x" /></Nav.Link>
          <Nav.Link href="#"><i className="bi bi-tiktok" /></Nav.Link>
          <Nav.Link href="#"><i className="bi bi-globe" /></Nav.Link>
          <span className="ms-2">
            <button className="btn btn-sm dropdown-toggle" type="button">
              English
            </button>
          </span>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopMenu;
