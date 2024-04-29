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
              style={{ padding: '10px 0', textAlign: 'center', borderBottom: '3px solid #F5F5F5' }}
            >
              <a
                style={{
                  color: '#000000',
                  fontSize: '25px',
                  transition: 'color 0.3s ease'
                }}
                href={`/tooded/${data.id}`}
                onMouseEnter={(e) => e.target.style.color = '#F5F5F5'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                {data.name}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}