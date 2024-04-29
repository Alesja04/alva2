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


      <Modal show={show} onHide={handleClose} size="lg">
  <Modal.Body style={{ position: 'relative' }}>
    <img src="../img/master.png" alt="Master" style={{ width: '100%' }} />

    <Button
      variant="primary"
      onClick={handleClose}
      a href='klassid'
      style={{
        position: 'absolute',
        top: '85%',
        left: '65%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#DFAE72',
        color: '#000000',
        border: 'none',
        padding: '10px 30px',
        fontSize: '16px',
        borderRadius: '10px',
      }}
    >
      ROHKEM
    </Button>

    <Button
      variant="secondary"
      onClick={handleClose}
      style={{
        position: 'absolute',
        top: '85%',
        left: '85%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#DFAE72',
        color: '#000000',
        border: 'none',
        padding: '10px 30px',
        fontSize: '16px',
        borderRadius: '10px',
      }}
    >
      KINNITATUD
    </Button>
  </Modal.Body>
</Modal>
    </>
  );
}
