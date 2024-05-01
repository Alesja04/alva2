import React, { useState, useEffect } from 'react';
import { Container, Modal } from 'react-bootstrap';

export default function Reserv() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    openModal();
  }, []);

  return (
    <Container>
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h1>&#128222; Broneeringu number: +372 658 956 &#128222; </h1>
      </div>

      <div>
        <img
          style={{ width: '100%', height: '900px' }}
          src='../img/reserv.png'
          alt='stoliki'
        />
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title><img style={{ width: '50px' }} src='./img/vnim.png' alt='vnimanie' />Oluline teade meie külalistele!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ textAlign: 'center', fontSize:'18px' }}>Lugupeetud külastajad,<br /><br />
            Kui teil on plaanis lähiajal meie asutust külastada ja soovite broneerida laua, võtke palun meiega eelnevalt ühendust, et registreerida oma soov.<br /><br />
            Laua broneerimine võimaldab meil pakkuda teile parimat teenindust ja mugavust teie külastuse ajal.<br /><br />
            <b>Ärge unustage helistada meile antud numbril, et registreerida oma laud!</b><br /><br />
            Täname teid tähelepanu ja mõistmise eest. Ootame teie kõnet ja loodame, et teeme teie külastuse meeldejäävaks!<br /><br />
            Lugupidamisega,<br />
            ALVA meeskond</p>
        </Modal.Body>
        <Modal.Footer>
          <p><b>&#128222;Broneeringu number: +372 658 956&#128222;</b></p>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}