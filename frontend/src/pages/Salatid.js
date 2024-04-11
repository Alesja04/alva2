import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Salatid() {
  return (
    <div
      className="mt-5"
      style={{
        height: 'auto',
        width: 'auto',

        backgroundColor: '#DAD29B',
      }}
    >
      <Container className="text-center">
        <h1 style={{ textAlign: 'center', paddingTop: 50 }}>SALATID</h1>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 15 }}>
            <img src="./img/cesar.png" alt="logo" width={220} height={200} />
            <p>CAESAR KANAGA</p>
            <p>7€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            <img src="./img/krek.png" alt="logo" width={220} height={200} />
            <p>KREEKA SALAT</p>
            <p>7€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <img src="./img/kre.png" alt="logo" width={220} height={200} />
            <p>KREEKA SALAT KANAGA</p>
            <p>5€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 30 }}>
            <img src="./img/puu.png" alt="logo" width={220} height={200} />
            <p>PUUVILJA SALAT</p>
            <p>7€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <img src="./img/oli.png" alt="logo" width={220} height={200} />
            <p>OLIVER KANAGA</p>
            <p>9€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            <img src="./img/koog.png" alt="logo" width={220} height={200} />
            <p>KÖÖGIVILJASALAT</p>
            <p>8€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
