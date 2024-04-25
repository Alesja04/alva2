import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Menu() {
  return (
    <div
      id="menu"
      style={{
        paddingTop: 50,
        paddingBottom: 100,
        height: 'auto',
        width: 'auto',
        fontFamily: 'Buda',
        backgroundColor: '#F4E7E0',
      }}
    >
      <Container>
        <h1 style={{ textAlign: 'center', paddingTop: 30 }}>MENÜÜ</h1>

        <Row style={{ paddingTop: 30 }}>
          <Col style={{ paddingTop: 15 }}>
            <a href="/tooded/4">
              <img src="../img/pasta.png" alt="pasta" width={600} height={300} />
            </a>
          </Col>
          <Col sm="6">
            <a href="/tooded/5">
              <img src="../img/suupisted.png" alt="suupisted" width={590} height={320} />
            </a>
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 30 }}>
            <a href="/tooded/3">
              <img src="../img/salatid.png" alt="salatid" width={350} height={250} />
            </a>
          </Col>
          <Col style={{ paddingTop: 30 }}>
            <a href="/tooded/2">
              <img src="../img/joogid.png" alt="joogid" width={350} height={250} />
            </a>
          </Col>
          <Col>
            <a href="/tooded/1">
              <img src="../img/magusad.png" alt="magusad" width={350} height={250} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
