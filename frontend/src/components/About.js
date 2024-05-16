import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <Container
      id="meist"
      style={{
        paddingTop: 50,
        fontFamily: 'Buda',
      }}
    >
      <h1 style={{ textAlign: 'center', paddingTop: 50 }}>MEIST</h1>
      <Row>
        <Col md="6" style={{ textAlign: 'center' }}>
          <img src="../img/meist.png" alt="logo" width={500} height="auto" style={{ maxWidth: '100%' }} />
        </Col>
        <Col md="6">
          <p style={{ fontSize: 20, textAlign: 'left', paddingTop: 50 }}>
            Edward Kalen on pikaajalise kogemusega ettevõtja.<br /><br />
            Pärast hotellinduse juhtimise eriala lõpetamist töötas ta mitu aastat suurtes kohviku- ja restoranikettides, omandades väärtuslikke kogemusi juhtimise ja äriarenduse alal.<br /><br />
            Kvaliteedile ja originaalsusele pühendudes lõi Edward Kalen ainulaadse kohviku, mis ei oleks mitte ainult koht, kus süüa, vaid ka kohtumis-, töö- ja inspiratsioonikoht
          </p>
        </Col>
      </Row>
    </Container>
  );
}