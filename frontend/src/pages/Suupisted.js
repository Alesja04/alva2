import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Pasta() {
  return (
    <div
      className="mt-5"
      style={{
        height: 'auto',
        width: 'auto',

        backgroundColor: '#B5D6DA',
      }}
    >
      <Container className="text-center">
        <h1 style={{ textAlign: 'center', paddingTop: 50 }}>SUUPISTED</h1>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 15 }}>
            <img src="./img/sib.png" alt="logo" width={220} height={200} />
            <p>SIBULARÕNGAD</p>
            <p>5€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            <img src="./img/just.png" alt="logo" width={220} height={200} />
            <p>JUUSTUSTALDIK</p>
            <p>8€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <img src="./img/nach.png" alt="logo" width={220} height={200} />
            <p>NACHOS</p>
            <p>5€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 30 }}>
            <img src="./img/fri.png" alt="logo" width={220} height={200} />
            <p>FRIIKARTULID</p>
            <p>5€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <img src="./img/kan.png" alt="logo" width={220} height={200} />
            <p>KANATIIVAD</p>
            <p>8€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            <img src="./img/moz.png" alt="logo" width={220} height={200} />
            <p>MOZZARELLA PULGAD</p>
            <p>5€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
