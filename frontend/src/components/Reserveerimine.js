import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Reserveerimine() {
  return (
    <div
      id="reserveerimine"
      style={{
        fontFamily: 'Buda',
        backgroundColor: '#E6CCC8',
        
      }}
    >
      <Container>
        <Row className="align-items-center"> {/* Центрируем содержимое вертикально */}
          <Col sm={6}>
            <h1 style={{ textAlign: 'center', paddingTop: 70 }}> RESERVEERIMINE </h1>
            <p style={{ fontSize: 30, textAlign: 'center', paddingTop: 80, paddingRight: 30 }}>
              LÕUNA SÖÖK
              <br />
              Laupäev ja pühapäev
              <br />
              Broneerimine kell 12:00-14:00
              <br />
              <br />
              <br />
              ÕHTU SÖÖK
              <br />
              Neljapäevast Pühapäevani
              <br />
              Broneerimine kell 18:00-21:00
              <br />
            </p>
            <a
              className="d-grid gap-2 col-6 mx-auto btn btn-outline-dark"
              href="/reserv"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0)', textDecoration: 'none', marginTop:'50px' }}
            >
              TEE RESERVEERIMINE
            </a>
          </Col>
          <Col sm={6}>
            <img src="../img/reserv.jpg" alt="reserveerimine" width="100%" height="auto" /> {/* Устанавливаем ширину изображения в 100% */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}