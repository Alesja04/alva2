import React from 'react'; //, { useRef }
//import {Container} from 'react-bootstrap';
//import Events from '../components/Events';
//import Delivery from '../components/Delivery';

import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <header id="header" className="header fixed-top header-scrolled mb-5">
      <Navbar
        sticky="top"
        expand="md"
        variant="white"
        className="justify-content-center"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <Nav>
          <Nav.Link href="/">
            <img src="../img/logo.png" alt="logo" width={130} height={50} />
          </Nav.Link>

          <Nav.Link href="/#meist">MEIST</Nav.Link>
          <Nav.Link href="/#menu">MENÜÜ</Nav.Link>
          <Nav.Link href="/#contact">KONTAKTID</Nav.Link>
          <Nav.Link href="/#reserveerimine">RESERVEERIMINE</Nav.Link>
          <Nav.Link href="/korzina">            
            <img src="../img/tar.png" alt="logo" width={60} height={50} />
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}
