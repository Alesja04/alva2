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

  const [hoveredButton1, setHoveredButton1] = useState(false);
  const [hoveredButton2, setHoveredButton2] = useState(false);

  useEffect(() => {
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
            href='klassid'
            style={{
              position: 'absolute',
              top: '85%',
              left: '60%',
              transform: 'translate(-50%, -50%)',
              padding: '10px 30px',
              fontSize: '16px',
              backgroundColor: hoveredButton1 ? '#EEAE42' : 'transparent', // Желтый фон при наведении
              borderColor: '#EEAE42', // Цвет границы
              color: hoveredButton1 ? '#000000' : '#EEAE42', // Цвет текста
              transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease' // Плавный переход
            }}
            onMouseEnter={() => setHoveredButton1(true)}
            onMouseLeave={() => setHoveredButton1(false)}
          >
            <b>ROHKEM</b>
          </Button>

          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '85%',
              left: '85%',
              width: '180px',
              transform: 'translate(-50%, -50%)',
              padding: '10px 30px',
              fontSize: '16px',
              backgroundColor: hoveredButton2 ? '#000000' : 'transparent', // серый фон при наведении
              borderColor: '#000000', // Цвет границы
              color: hoveredButton2 ?  '#EEAE42':'#000000' , // Цвет текста
              transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease' // Плавный переход
            }}
            onMouseEnter={() => setHoveredButton2(true)}
            onMouseLeave={() => setHoveredButton2(false)}
          >
            <b>SULGE &#x2715;</b>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
