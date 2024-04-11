import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

export default function Joogid() {
  return (
    <div
      className="mt-5"
      style={{
        height: 'auto',
        width: 'auto',

        backgroundColor: '#F2E1F2',
      }}
    >
      <Container className="text-center">
        <h1 style={{ textAlign: 'center', paddingTop: 50 }}>JOOGID</h1>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 15 }}>
            <img src="./img/apel.png" alt="logo" width={220} height={200} />
            <p>APELSINIMAHL 0,25l</p>
            <p>3€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            <img src="./img/mango.png" alt="logo" width={220} height={200} />
            <p>MANGOMAHL0,25l</p>
            <p>4€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <img src="./img/arb.png" alt="logo" width={220} height={200} />
            <p>ARBUUSIMAHL 0,25l</p>
            <p>4€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 30 }}>
            <img src="./img/moh.png" alt="logo" width={220} height={200} />
            <p>ALKOHOLIVABA MOJITO 0,25l</p>
            <p>4€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <img src="./img/lim.png" alt="logo" width={220} height={200} />
            <p>LIMONAAD 0,25l </p>
            <p>3€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            <img src="./img/col.png" alt="logo" width={220} height={200} />
            <p>COCA COLA 0,25l</p>
            <p>3€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
