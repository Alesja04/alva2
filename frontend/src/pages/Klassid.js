import React, { useState } from 'react';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import baseURL from '../config';

export default function Klassid() {
  const [nimi, setNimi] = useState('');
  const [perekonnanimi, setPerekonnanimi] = useState('');
  const [telefoninumber, setTelefoninumber] = useState('');
  const [msg, setMsg] = useState('');

  const RegForm = async (e) => {
    e.preventDefault();
    console.log('text');
    try {
      await axios.post(`${baseURL}/klassid/`, {
        nimi: nimi,
        perekonnanimi: perekonnanimi,
        telefoninumber: telefoninumber,
      });

      //   window.location.reload();
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Container className="mt-1 mb-3">
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card
            className="shadow"
            style={{ width: '700px', backgroundColor: '#F2D9B0', marginTop: '50px' }}
          >
            <Card.Body style={{ paddingLeft: '50px', paddingRight: '50px' }}>
              <h1 className="text-center mt-3">TULE MEIE MEISTRIKLASSI!</h1>
              <img
                src="../img/kru.png"
                alt="kruassan"
                style={{ height: '110px', position: 'absolute', top: '70px', left: '21px' }}
              />

              <div
                style={{
                  textAlign: 'center',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '15px',
                  border: '2px solid #000000',
                  marginTop: '30px',
                }}
              >
                <br />
                <b>
                  <h4>Meistriklassi programm hõlmab järgmist:</h4>
                </b>
                <ul style={{ textAlign: 'left', display: 'inline-block', marginTop: '10px' }}>
                  <li>Taina valmistamine</li>
                  <li>Croissantide vormimine</li>
                  <li>Õige küpsetamise saladused</li>
                  <li>Ideed täidiste jaoks</li>
                </ul>
                <br />
                <br />
                <h5>Osalemise hind: 10€</h5>
                <p>
                  {' '}
                  *Ära jäta kasutamata võimalust õppida, kuidas valmistada maitsvaid ja krõbedaid
                  croissante nagu profi! Kutsu oma sõbrad ja pere, sest koos küpsetamine on veelgi
                  lõbusam!
                </p>
                <br />
              </div>
              <Form onSubmit={RegForm}>
                <p className="has-text-centered">{msg}</p>

                <Form.Group className="mb-3">
                  <Form.Label className="text-center">NIMI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nimi"
                    value={nimi}
                    onChange={(e) => setNimi(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-center">PEREKONNANIMI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Perekonnanimi"
                    value={perekonnanimi}
                    onChange={(e) => setPerekonnanimi(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-center">TELEFONINUMBER</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Telefoninumber"
                    value={telefoninumber}
                    onChange={(e) => setTelefoninumber(e.target.value)}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button
                    style={{ backgroundColor: 'rgb(238, 174, 66,0)' }}
                    type="submit"
                    className="w-50 btn btn-outline-dark"
                  >
                    REGISTREERIMINE
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
