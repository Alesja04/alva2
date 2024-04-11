import React from 'react';
import { Button, Container, Row, Col} from 'react-bootstrap';


export default function Delivery() {
  return (
    <Container style={{
      height: 620,
      width: 1100,
      backgroundSize: "cover",
      fontFamily: 'Georgia',
      backgroundColor: '#E1BFC9',
      borderRadius: 20
      }}>
    <h1 style={{ textAlign: 'center', paddingTop: 50}}>KOHALETOIMITAMINE</h1>
      <Row>
      <Col sm="12">
      <p style={{fontSize: 22, textAlign: 'justify', paddingTop: 30, paddingEnd: 50, paddingLeft: 30,}}>
        Вступительное испытание всегда содержит собеседование. <br/>
        В рамках некоторых вступительных испытаний необходимо дополнительно<br/>
        пройти тест, выполнить практическое задание или написать мотивационное письмо, <br/>
        которые определят готовность учиться по данной специальности.<br/>
        На основании баллов, полученных во время вступительного испытания, <br/>
        формируется место в строке рейтинга. <br/>
        У каждой специальности свой проходной балл (подробно смотри в таблице ниже). <br/>
        <br/>
        Тест - max 10p, собеседование - max 20p. <br/>
        Всего - max 30p.<br/>
        Проходной балл - min 12p.<br/>
    </p>
    </Col>
    <Col sm="4 w-100"> <Button className="btn btn-primary btn-lg" href="/form" style={{float: "right", backgroundColor: '#A25F5F'}}>Поступить</Button> </Col>

    </Row>
</Container>

  )
}