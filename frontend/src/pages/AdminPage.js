import React, { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function RegForm() {
    const [firstname, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const [hoveredButton, setHoveredButton] = useState(false);
    // const navigate = useNavigate('');

    const RegForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/logadmin`, {
                firstname: firstname,
                password: password
            });

            window.location.reload();
            redirect('/menuadmin');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <Container className="mt-1">
            <h2 className="text-center mt-3">Administraatori sisselogimise vorm</h2>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <Form onSubmit={RegForm}>
                                <p className="has-text-centered">{msg}</p>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-center">Nimi</Form.Label>
                                    <Form.Control type="text" placeholder="Sisestage nimi" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="text-center">Parool</Form.Label>
                                    <Form.Control type="password" placeholder="Sisestage parool" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>


                                <div className="d-flex justify-content-center">
                                    <Button style={{
                                        backgroundColor: hoveredButton ? '#000000' : 'transparent', // серый фон при наведении
                                        borderColor: '#000000', // Цвет границы
                                        color: hoveredButton ? '#FFFFFF' : '#000000', // Цвет текста
                                        transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease' // Плавный переход 
                                    }}
                                        onMouseEnter={() => setHoveredButton(true)}
                                        onMouseLeave={() => setHoveredButton(false)}

                                        type="submit"
                                        className="w-50"
                                    >Sisend</Button>
                                </div>
                            </Form>
                            {/* <a href="http://localhost:5000/zajavka/" target="_blank">Register List</a> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}