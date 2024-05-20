import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
  return (
    <div
      id="contact"
      style={{
        height: 'auto',
        width: 'auto',
        backgroundSize: 'cover',
        fontFamily: 'Buda',
        backgroundColor: '#AEC899'
      }}
    >
      <Container style={{ paddingTop: '10px', paddingBottom: '50px'}}>
        <Row>
          <Col xs={12} sm={6}>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.3485347233209!2d27.39583937785464!3d59.360521808522826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469465618ffcfeb3%3A0x7ff0dc0740dbf1a5!2sKutse%2013%2C%20J%C3%B5hvi%2C%2041533%20Ida-Viru%20maakond!5e0!3m2!1sru!2see!4v1716199327084!5m2!1sru!2see" width="800" height="600" style={{border:0, maxWidth: 630, marginTop:170 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </Col>
          <Col xs={12} sm={6}>
            <h1 style={{ textAlign: 'center', paddingTop: 80 }}>VÕTA MEIEGA ÜHENDUST</h1>
            <p style={{ fontSize: 30, marginTop: 30, textAlign: 'left' }}>
              &#9990; Helista meile: Kui sul on küsimusi või soovid lauda broneerida, siis helista
              meile telefonil
              <br /> +372 658 956. Meie sõbralik meeskond aitab teid hea meelega!
              <br />
              <br />
              &#128386; Kirjutage meile: Võite meiega ühendust võtta ka e-posti aadressil
              info@alva.ee. Vastame kõigile teie küsimustele ja päringutele nii kiiresti kui
              võimalik.
              <br />
              <br />
              <img style={{ width: '45px' }} src="../img/map.png" alt="map" />
              Kuidas meid leida: Asume aadressil Ida-Virumaa, Jõhvi, Kutse 13. Saate meid hõlpsasti
              kaardil üles leida ja meid külastada, millal iganes soovite.
              <br />
              <br />
              Ära unusta meie kohvikus käia ja nautida atmosfääri ja maitsvat toitu! Me ootame teid!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}