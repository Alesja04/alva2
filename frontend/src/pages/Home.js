import React, { useRef } from 'react';
import Menu from '../components/Menu';
import Reserveerimine from '../components/Reserveerimine';
import About from '../components/About';
import Contact from '../components/Contact';
import MainScreen from '../components/MainScreen';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Home() {
  const AboutRef = useRef();
  const MenuRef = useRef();
  const ContactRef = useRef();
  const ReserveerimineRef = useRef();
  const MainScreenRef = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() =>{
    handleShow();
  }, [])

  return (
    <>
      <section ref={MainScreenRef}>
        <MainScreen />
      </section>
      <section ref={AboutRef} id="meist">
        <About />
      </section>
      <section ref={MenuRef} id="menu">
        <Menu />
      </section>
      <section ref={ContactRef} id="contact">
        <Contact />
      </section>

      <section ref={ReserveerimineRef} id="reserveerimine">
        <Reserveerimine />
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TULE MEIE MEISTRIKLASSI!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Meistriklassi programm hõlmab järgmist:</p>
            <ul>
                <li>Taina valmistamine</li>
                <li>Croissantide vormimine</li>
                <li>Õige küpsetamise saladused</li>
                <li>Ideed täidiste jaoks</li>
            </ul>
            <p>Osalemise hind: <b>10€</b></p>
            <p>*Ära jäta kasutamata võimalust õppida, kuidas valmistada maitsvaid ja krõbedaid croissante nagu profi! Kutsu oma sõbrad ja pere, sest koos küpsetamine on veelgi lõbusam!</p>
            
            <form>
            <label>
                NIMI: 
                <input type="text" name="name" />
            </label>

            <label>
                PEREKONNANIMI: 
                <input type="text" name="name" />
            </label>

            <label>
                TELEFONINUMBER: 
                <input type="text" name="name" />
            </label>

            <label>
                EMAIL: 
                <input type="text" name="name" />
            </label>

            </form>

            </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            REGISTREERIMINE
          </Button>

        </Modal.Footer>
      </Modal>

    </>
  );
}
