import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Menu() {
  return (
    <div
      style={{
        paddingTop: 50,
        paddingBottom: 100,
        fontFamily: 'Buda',
        backgroundColor: '#F4E7E0',
      }}
    >
      <Container>
        <h1 style={{ textAlign: 'center', paddingTop: 50 }}>MENÜÜ</h1>

        <Row >
          <Col xs={12} sm={6} style={{ paddingTop: 15 }}>
            <a href="/tooded/4">
              <img 
                src="../img/pasta.png" 
                alt="pasta" 
                width="100%" 
                height="auto" 
                style={{ maxWidth: 600 }}
              />
            </a>
          </Col>
          <Col xs={12} sm={6}>
            <a href="/tooded/5">
              <img 
                src="../img/suupisted.png" 
                alt="suupisted" 
                width="100%" 
                height="auto" 
                style={{ maxWidth: 520 }}
              />
            </a>
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col xs={12} md={4} style={{ paddingTop: 30 }}>
            <a href="/tooded/3">
              <img 
                src="../img/salatid.png" 
                alt="salatid" 
                width="100%" 
                height="auto" 
                style={{ maxWidth: 330 }}
              />
            </a>
          </Col>
          <Col xs={12} md={4} style={{ paddingTop: 30 }}>
            <a href="/tooded/2">
              <img 
                src="../img/joogid.png" 
                alt="joogid" 
                width="100%" 
                height="auto" 
                style={{ maxWidth: 330 }}
              />
            </a>
          </Col>
          <Col xs={12} md={4} style={{  }}>
            <a href="/tooded/1">
              <img 
                src="../img/magusad.png" 
                alt="magusad" 
                width="100%" 
                height="auto" 
                style={{ maxWidth: 330 }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}