import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Pasta() {
  return (
    <div
      className="mt-5"
      style={{
        height: 'auto',
        width: 'auto',

        backgroundColor: '#F4CCCC',
      }}
    >
      <Container className="text-center">
        <h1 style={{ textAlign: 'center', paddingTop: 50 }}>MAGUSAD</h1>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 15 }}>
            <img src="./img/tir.png" alt="logo" width={220} height={200} />
            <p>TIRAMISU</p>
            <p>5€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            <img src="./img/jus.png" alt="logo" width={220} height={200} />
            <p>JUUSTUKORK</p>
            <p>4€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <img src="./img/van.png" alt="logo" width={220} height={200} />
            <p>VANILLJÄÄTIS</p>
            <p>5€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 30 }}>
            <img src="./img/bel.png" alt="logo" width={220} height={200} />
            <p>BELGIA VAHVLID</p>
            <p>4€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <img src="./img/pan.png" alt="logo" width={220} height={200} />
            <p>PANACOTA</p>
            <p>4€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            <img src="./img/pim.png" alt="logo" width={220} height={200} />
            <p>PIIMAKOOK MAASIKAGA</p>
            <p>4€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
