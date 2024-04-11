import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';


export default function Events() {
  return (
    <Container style={{
      height: 550,
      width: 1100,
      backgroundSize: "cover",
      fontFamily: 'Georgia',
      backgroundColor: '#E1BFC9',
      borderRadius: 20
      }}>
    <h1 style={{ textAlign: 'center', paddingTop: 50}}>ÜRITUSTE KALENDER</h1>
      <Row>
       
        
      <Col sm="10">
      <p style={{fontSize: 22, textAlign: 'justify', paddingTop: 30, paddingEnd: 50, paddingLeft: 30}}>
      JUUNI<br />
      Veiniõhtu 7.06<br />
      Bruschetta valmistamise meistriklass  14.06<br />
      Croissanti valmistamise meistriklass 21.06<br />
      
      JUULI<br />
      Konjaki maailm 12.06<br />
      Trühvlite valmistamise meistriklass 19.06<br />
      Eesti uusima õlle degusteerimine 26.06<br />
    </p>
    </Col>
  

    </Row>
</Container>

  )
}
