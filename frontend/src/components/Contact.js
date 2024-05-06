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
        backgroundColor: '#AEC899',
      }}
    >
      <Container>
        <Row>

          <Col sm="6">
            <img src="../img/contact.jpg" alt="kontakt" width={630} height="auto" />

          </Col>
          <Col sm="6">
            <h1 style={{ textAlign: 'center', paddingTop: 50 }}>VÕTA MEIEGA ÜHENDUST</h1>
            <p style={{ fontSize: 30, marginTop: 30, textAlign: 'right' }}>

             &#9990; Helista meile: Kui sul on küsimusi või soovid lauda broneerida, siis helista meile telefonil<br /> +372 658 956. Meie sõbralik meeskond aitab teid hea meelega!<br /><br />

              &#128386; Kirjutage meile: Võite meiega ühendust võtta ka e-posti aadressil info@alva.ee. Vastame kõigile teie küsimustele ja päringutele nii kiiresti kui võimalik.<br /><br />

              <img style={{width:'45px'}} src='./img/map.png' alt='map'/>Kuidas meid leida: Asume aadressil Ida-Virumaa, Jõhvi, Kutse 13. Saate meid hõlpsasti kaardil üles leida ja meid külastada, millal iganes soovite.<br /><br />

              Ära unusta meie kohvikus käia ja nautida atmosfääri ja maitsvat toitu! Me ootame teid!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
