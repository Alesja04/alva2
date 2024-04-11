import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';

export default function Reserveerimine() {
  return (
    <div
      id="reserveerimine"
      style={{
        paddingTop: 100,
        height: 'auto',
        width: 'auto',
        backgroundSize: 'cover',
        fontFamily: 'Buda',
        backgroundColor: '#D6D7D7',
      }}
    >
      <Container>
        <Row>
          <Col sm="6">
            <h1 style={{ textAlign: 'center', paddingTop: 50, paddingRight: 250 }}>
              RESERVEERIMINE
            </h1>

            <p style={{ fontSize: 28, textAlign: 'justify', paddingTop: 50, paddingRight: 30 }}>
              LÕUNASÖÖK
              <br />
              Laupäev ja pühapäev
              <br />
              Broneerimine kell 12.00-13.30
              <br />
              <br />
              <br />
              ÕHTUSÖÖK
              <br />
              Neljapäevast Pühapäevani
              <br />
              Broneerimine 18.00-20.45
              <br />
            </p>

            <Button
              className="d-grid gap-2 col-6 mx-auto btn-outline-dark"
              href=""
              style={{ backgroundColor: 'rgb(255,255,255,0)' }}
            >
              TEE RESERVEERIMINE
            </Button>
          </Col>
          <Col sm="6">
            <img src="../img/reserv.png" alt="logo" width={500} height="auto" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
