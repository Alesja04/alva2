import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
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
            <Link to="/tooded/4"><img src="../img/pasta.png" alt="pasta" width={600} height={300} /></Link>
          </Col>
          <Col sm="6">
            <Link to="/tooded/5"><img src="../img/suupisted.png" alt="suupisted" width={590} height={320} /></Link>
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>

          <Col style={{ paddingTop: 30 }}>
            <Link to="/tooded/3"><img src="../img/salatid.png" alt="salatid" width={350} height={250} /></Link>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            <Link to="/tooded/2"><img src="../img/joogid.png" alt="joogid" width={350} height={250} /></Link>
          </Col>

          <Col>
            <Link to="/tooded/1"><img src="../img/magusad.png" alt="magusad" width={350} height={250} /></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
