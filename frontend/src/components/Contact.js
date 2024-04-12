import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export default function Contact() {
            

return (
    <div
      id="contact"
      style={{
        // paddingTop: 50,
        // paddingBottom: 100,
        height: 'auto',
        width: 'auto',
        backgroundSize: 'cover',
        fontFamily: 'Buda',
        backgroundColor: '#849D6F',
      }}
    >
      <Container>
        <Row>

          <Col sm="6">
        <img src="../img/contact.jpg" alt="kontakt" width={450} height="auto" />        

          </Col>
          <Col sm="6">
            <h1 style={{ textAlign: 'center', paddingTop: 50 }}>VÕTA MEIEGA ÜHENDUST</h1>
            <p style={{ fontSize: 30, marginTop: 100, textAlign: 'right' }}>
              Alvateamiga ühenduse võtmiseks täitke allolev kontaktvorm. Teise võimalusena võite
              meile helistada numbril +372 658 956 või kirjutada meile e-post info@alva.ee
              <br />
              Aadress: Harjumaa, Tallinn, Akadeemia tee 5
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
