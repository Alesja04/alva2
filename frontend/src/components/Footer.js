import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto ">
        <Container
          className="text-center"
          fluid
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #000000',
            color: '#000000',
            height: '60px',
            position: 'relative',

            padding: '10px',
          }}
        >
          <p>&copy; ALVA KOHVIK 2024. KÕIK ÕIGUSED KAITSTUD.</p>
        </Container>
      </footer>
    );
  }
}
