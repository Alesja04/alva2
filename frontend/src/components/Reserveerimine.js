import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';

export default function Reserveerimine() {
  return (
    <div
      id="reserveerimine"
      style={{
        // paddingTop: 50,
        height: 'auto',
        width: 'auto',
        backgroundSize: 'cover',
        fontFamily: 'Buda',
        backgroundColor: '#E6CCC8',
      }}
    >
      <Container>
        <Row>
          <Col sm="6">
            <h1 style={{ textAlign: 'center', paddingTop: '50px' }}> RESERVEERIMINE
            </h1>

            <p style={{ fontSize: 28, textAlign: 'center', paddingTop: 50, paddingRight: 30 }}>
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

            <a
              className="d-grid gap-2 col-6 mx-auto btn btn-outline-dark"
              href="reserv"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0)', textDecoration: 'none' }}
            >
              TEE RESERVEERIMINE
            </a>
          </Col>
          <Col sm="6">
            <img src="../img/reserv.jpg" alt="reserveerimine" width={500} height="auto" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
