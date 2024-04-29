import React, { useState } from "react";
import axios from "axios";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function RegForm() {
  const [nimi, setNimi] = useState("");
  const [perekonnanimi, setPerekonnanimi] = useState("");
  const [telefoninumber, setTelefoninumber] = useState("");
  const [aadress, setAadress] = useState("");
  const [msg, setMsg] = useState("");
  // const navigate = useNavigate('');

  const RegForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/delivery/`, {
        nimi: nimi,
        perekonnanimi: perekonnanimi,
        telefoninumber: telefoninumber,
        aadress: aadress,
      });

      window.location.reload();
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Container className="mt-1">
      <h2 className="text-center mt-3">SINU TELLIMUS</h2>
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
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

                <Form.Group className="mb-3">
                  <Form.Label className="text-center">AADRESS</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Aadress"
                    value={aadress}
                    onChange={(e) => setAadress(e.target.value)}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button
                    style={{ backgroundColor: "#A25F5F", border: 0 }}
                    type="submit"
                    className="w-50"
                  >
                    Deebet- või krediitkaart
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
