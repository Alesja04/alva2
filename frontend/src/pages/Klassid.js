import React, { useState } from "react";
import axios from "axios";
import { Col, Button, Row, Container, Card, Form, Image } from "react-bootstrap";

export default function Klassid() {
  const [nimi, setNimi] = useState("");
  const [perekonnanimi, setPerekonnanimi] = useState("");
  const [telefoninumber, setTelefoninumber] = useState("");
  const [msg, setMsg] = useState("");

  const RegForm = async (e) => {
    e.preventDefault();
    console.log("text")
    try {
      await axios.post(`http://localhost:5000/klassid/`, {
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
    <Container className="mt-1">
     
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Header>
                <h1 className="text-center mt-3">REGISTREERIMINE MEISTRIKLASSILE</h1>
            </Card.Header>
            <Card.Body> 
                <Image src='../assets/klassid.png' alt='klassid'></Image>
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
                    style={{ backgroundColor: "#A25F5F", border: "0" }}
                    type="submit"
                    className="w-50"
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
