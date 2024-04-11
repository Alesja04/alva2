import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
//import Header from '../components/Header';

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
        <h1 style={{ textAlign: 'center', paddingTop: 50 }}>PASTA</h1>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 15 }}>
            <img src="./img/karb.png" alt="logo" width={220} height={200} />
            <p>PASTA CARBONARRA</p>
            <p>7€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            <img src="./img/kana.png" alt="logo" width={220} height={200} />
            <p>PASTA KANAGA</p>
            <p>7€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <img src="./img/toma.png" alt="logo" width={220} height={200} />
            <p>PASTA TOMATIGA</p>
            <p>5€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 30 }}>
            <img src="./img/mere.png" alt="logo" width={220} height={200} />
            <p>PASTA ŠAMPJONIDEGA</p>
            <p>7€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <img src="./img/shamp.png" alt="logo" width={220} height={200} />
            <p>PASTA MEREANDIDEGA</p>
            <p>9€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            <img src="./img/vorst.png" alt="logo" width={220} height={200} />
            <p>PASTA VORSTIGA</p>
            <p>8€</p>
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
