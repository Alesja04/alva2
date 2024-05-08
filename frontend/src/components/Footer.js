import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
<footer className="footer mt-auto">
  <Container
    className="text-center"
    fluid
    style={{
      backgroundColor: '#FFFFFF',
      border: '1px solid #000000',
      color: '#000000',
      height: '70px',
      position: 'relative',
      padding: '10px',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <a href="https://www.instagram.com/kohvik_alva/">
        <img src="../img/inst.png" alt="Instagram" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      </a>     

      <a href="https://www.facebook.com/profile.php?id=61559215046564">
        <img src="../img/face.png" alt="Facebook" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      </a>

      <a href="https://twitter.com/alva_kohvik">
        <img src="../img/twi.png" alt="Twitter" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      </a>
       
    </div>
    <p>&copy; ALVA KOHVIK 2024. KÕIK ÕIGUSED KAITSTUD. </p>
  </Container>
</footer>
    );
  }
}
