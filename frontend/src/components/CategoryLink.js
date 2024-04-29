import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import categories from '../data/categories.json';

export default function CategoryLink() {
  return (
    <div
      id="category"
      style={{
        paddingTop: 50,
      }}
    >
      <Container>
        <Row style={{ paddingTop: 10 }} className="menucategory">
          {categories.map((data) => (
            <Col
              key={data.id}
              style={{ padding: '10px 0', textAlign: 'center', borderBottom: '1px solid #ddd' }}
            >
              <a href={`/tooded/${data.id}`}>{data.name}</a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
