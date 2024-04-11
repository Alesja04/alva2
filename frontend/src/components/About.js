import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  //,  backgroundColor: '#D9C3B5',
  return (
    <Container
      id="meist"
      style={{
        paddingTop: 100,

        height: 'auto',
        width: 'auto',
        backgroundSize: 'cover',
        fontFamily: 'Buda',
      }}
    >
      <h1 style={{ textAlign: 'center', paddingTop: 50 }}>MEIST</h1>
      <Row>
        <Col sm="6">
          <img src="../img/meist.png" alt="logo" width={500} height="auto" />
        </Col>
        <Col sm="6">
          <p style={{ fontSize: 30, textAlign: 'left', paddingTop: 50, paddingRight: 30 }}>
            Alva on Eesti juhtiva restoranigrupi ja tegevkokk Edvard Calleni looming. Üks riigi
            kuulsamaid restorane, Alva on 22 aastat järjest saanud Good Food Guide'is kolm mütsi.
            <br />
            <br />
            Restoran on orgaaniline ruum, mis peegeldab Edvard Calleni loodusest inspireeritud
            kööki. Tekstuuride ja värvide koosmõju toob elu ja erksuse, mis hõlmab restorani oma.
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
}
