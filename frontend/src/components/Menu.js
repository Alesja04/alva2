import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Menu() {
  return (
    <div
      id="menu"
      style={{
        paddingTop: 100,
        height: 'auto',
        width: 'auto',
        fontFamily: 'Buda',
        backgroundColor: '#F4E7E0',
      }}
    >
      <Container>
        <h1 style={{ textAlign: 'center', paddingTop: 50 }}>MENÜÜ</h1>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 15 }}>
            <a href="/pasta">
              <img src="../img/pasta.png" alt="logo" width={600} height={300} />
            </a>
          </Col>
          <Col sm="6">
            <a href="/suupisted">
              <img src="../img/suupisted.png" alt="logo" width={590} height={320} />
            </a>
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 30 }}>
            <a href="/salatid">
              <img src="../img/salatid.png" alt="logo" width={350} height={250} />
            </a>
          </Col>
          <Col style={{ paddingTop: 30 }}>
            <a href="/joogid">
              <img src="../img/joogid.png" alt="logo" width={350} height={250} />
            </a>
          </Col>
          <Col>
            <a href="/magusad">
              <img src="../img/magusad.png" alt="logo" width={350} height={250} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
