import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import programsList from '../data/program.json';

export default function Joogid() {
  return (
    <div
      className="mt-5"
      style={{
        height: 'auto',
        width: 'auto',

        backgroundColor: '#F2E1F2',
      }}
    >
      <Container className="text-center">
        <h1 style={{ textAlign: 'center', paddingTop: 50 }}>JOOGID</h1>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 15 }}>

            {programsList.map((data) => (
                <Col.Item eventkey={data.id} key={1}>
                    <Col.Body>
                    {data.name} {data.description} {data.price}
                    </Col.Body>
                </Col.Item>
            ))}
          </Col>

          <Col>
            
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col style={{ paddingTop: 30 }}>
            
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col style={{ paddingTop: 30 }}>
            
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>

          <Col>
            
            <Button style={{ backgroundColor: 'rgb(255,255,255,0)' }}>LISA OSTUKORVI</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
