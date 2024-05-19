import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <Container
      id="meist"
      fluid
      style={{
        fontFamily: 'Buda',
        textAlign: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h1 style={{ paddingTop: 50 }}>MEIST</h1>
      <Row className="align-items-center" >
        <Col xs={12} md={6}>
          <img 
            src="../img/meist.png" 
            alt="logo" 
            style={{ maxWidth: '80%', height: 'auto', marginTop: 17 }} 
          />
        </Col>
        <Col xs={12} md={6} style={{ textAlign: 'left', paddingTop: 20 }}>
          <p style={{ fontSize: 30, paddingRight: 20 }}>
            Edward Kalen on pikaajalise kogemusega ettevõtja.<br /><br />
            Pärast hotellinduse juhtimise eriala lõpetamist töötas ta mitu aastat suurtes kohviku- ja restoranikettides, omandades väärtuslikke kogemusi juhtimise ja äriarenduse alal.<br /><br />
            Kvaliteedile ja originaalsusele pühendudes lõi Edward Kalen ainulaadse kohviku, mis ei oleks mitte ainult koht, kus süüa, vaid ka kohtumis-, töö- ja inspiratsioonikoht.
          </p>
        </Col>
      </Row>
    </Container>
  );
}