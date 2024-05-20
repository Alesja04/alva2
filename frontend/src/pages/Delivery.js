import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form, Table, Alert } from 'react-bootstrap';
import moment from 'moment';
import baseURL from '../config';

import { useNavigate } from 'react-router-dom';

export default function RegForm({ clearCart }) {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nimi, setNimi] = useState('');
  const [perekonnanimi, setPerekonnanimi] = useState('');
  const [telefoninumber, setTelefoninumber] = useState('');
  const [aadress, setAadress] = useState('');
  const [msg, setMsg] = useState('');
  const newDate = moment().format('DD-MM-YYYY');
  const [strDate] = useState(moment().format('YYYY-MM-DD hh:mm:ss'));
  const [dateNumber] = useState(Date.parse(strDate) / 1000); // Текущая дата при первом рендеринге, сохраняем в состоянии
  const [orderSent, setOrderSent] = useState(false); // Статус отправки заказа
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); // Состояние для ошибок заполнения полей

  useEffect(() => {
    const ordersString = localStorage.getItem('orders');
    if (ordersString) {
      const orders = JSON.parse(ordersString);
      setOrders(orders);
      // Calculate total price when orders change
      const summa = orders.reduce((total, el) => total + Number.parseFloat(el.price), 0);
      setTotalPrice(summa);
    }
  }, [orders]); // Dependency added to useEffect

  const validateForm = () => {
    const newErrors = {};
    if (!nimi) newErrors.nimi = 'Nimi on kohustuslik';
    if (!perekonnanimi) newErrors.perekonnanimi = 'Perekonnanimi on kohustuslik';
    if (!telefoninumber) newErrors.telefoninumber = 'Telefoninumber on kohustuslik';
    if (!aadress) newErrors.aadress = 'Aadress on kohustuslik';
    return newErrors;
  };

  const handleRegFormSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newDate = moment().format('YYYY-MM-DD hh:mm'); // Вызываем moment только при отправке заказа

    const deliveryData = {
      orderId: dateNumber,
      dateDelivery: newDate,
      nimi: nimi,
      perekonnanimi: perekonnanimi,
      telefoninumber: telefoninumber,
      aadress: aadress,
      products: orders,
      totalPrice: totalPrice,
      totalQuantity: orders.length,
    };

    try {
      await axios.post(`${baseURL}/delivery/`, deliveryData);
      setOrderSent(true);
      localStorage.removeItem('orders'); // Очищаем localStorage
      setOrders([]); // Очищаем массив orders после отправки заказа
      clearCart();
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Container className="mt-3 mb-5" style={{ height: 'auto', minHeight: '680px' }}>
      <h2 className="text-center mt-5">SINU TELLIMUS  №{dateNumber}</h2>
      <p className="text-center mt-1">
        <b>Tellimuse kuupäev: </b>
        {newDate}
      </p>
      {orderSent ? (
        <Alert variant="success" className="mt-3">
          <Container style={{ textAlign: 'center' }}>
            <h4>Tellimus on saadetud!</h4>
            <hr />
            <Button variant="success" className="mt-3" onClick={() => navigate('/tooded/1')}>
             Uus tellimus
            </Button>
          </Container>
        </Alert>
      ) : (
        <Row className="d-flex justify-content-center align-items-center" >
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow" style={{backgroundColor:'#E0D9CE'}}>
              <Card.Body>
                <Form onSubmit={handleRegFormSubmit}>
                  <p className="text-center">{msg}</p>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center">ESS-NIMI</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nimi"
                      value={nimi}
                      onChange={(e) => setNimi(e.target.value)}
                      isInvalid={!!errors.nimi}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.nimi}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-center">PEREKONNANIMI</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Perekonnanimi"
                      value={perekonnanimi}
                      onChange={(e) => setPerekonnanimi(e.target.value)}
                      isInvalid={!!errors.perekonnanimi}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.perekonnanimi}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-center">TELEFONINUMBER</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Telefoninumber"
                      value={telefoninumber}
                      onChange={(e) => setTelefoninumber(e.target.value)}
                      isInvalid={!!errors.telefoninumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.telefoninumber}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-center">AADRESS</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Aadress"
                      value={aadress}
                      onChange={(e) => setAadress(e.target.value)}
                      isInvalid={!!errors.aadress}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.aadress}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Table striped bordered hover size="sm" style={{ border: '2px solid #FFFFFF' }}>
                    <thead>
                      <tr>
                        <th>Tooted</th>
                        <th>Hind</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((data, index) => (
                        <tr key={index}>
                          <td>{data.name}</td>
                          <td>{data.price} €</td>
                        </tr>
                      ))}
                      <tr>
                        <td style={{ textAlign: 'center' }} colSpan={3}>
                          <span style={{ textAlign: 'center' }}>
                          Toodete arv: {orders.length} &nbsp; Koguhind:{' '}
                            {new Intl.NumberFormat().format(totalPrice)} €
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="d-flex justify-content-center">
                    <Button
                      style={{color:'#000000', backgroundColor: 'transparent', transition: 'background-color 0.3s ease', borderColor:'#20CA31' }}
                      type="submit"
                      className="w-50"
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#20CA31'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      Tellimine
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}