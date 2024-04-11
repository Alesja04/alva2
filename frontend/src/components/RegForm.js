import React, {useState}  from 'react';
import axios from 'axios';
//import { useNavigate} from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form} from 'react-bootstrap';

export default function RegForm() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState('');
    const [msg, setMsg] = useState('');
    const haridus = ['Primary education', 'Secondary education', 'Lower secondary education', 'Tertiary education'];
   // const navigate = useNavigate('');

 const RegForm = async (e) =>{
        e.preventDefault();
     try{
           await axios.post(`http://localhost:5000/zajavka/`, {
                firstname: firstname,
                lastname: lastname,
                dob: dob,
                email: email,
                education: education,
            });
          
            window.location.reload();
           // navigate('/login');
       }catch(error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
      <Container className="mt-1">
          <h2 className="text-center mt-3">Форма поступления</h2>
          <Row className="d-flex justify-content-center align-items-center">
              <Col md={8} lg={6} xs={12}>
                  <Card className="shadow">
                      <Card.Body>
                          <Form onSubmit={RegForm}>
                              <p className="has-text-centered">{msg}</p>
                              <Form.Group className="mb-3">
                                  <Form.Label className="text-center">Firstname</Form.Label>
                                  <Form.Control  type="text" placeholder="Enter firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                              </Form.Group>
  
                              <Form.Group className="mb-3">
                                  <Form.Label className="text-center">Lastname</Form.Label>
                                  <Form.Control  type="text" placeholder="Enter lastname" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
                              </Form.Group>
  
                              <Form.Group className="mb-3">
                                  <Form.Label className="text-center">Date of birth</Form.Label>
                                  <Form.Control  type="date" value={dob} onChange={(e) => setDob(e.target.value)}/>
                              </Form.Group>
  
                              <Form.Group className="mb-3">
                                  <Form.Label className="text-center">Email</Form.Label>
                                  <Form.Control  type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                              </Form.Group>
  
                              <Form.Group className="mb-3">
                                  <Form.Label className="text-center">Education</Form.Label>
                                  <Form.Select value={education} onChange={(e) => setEducation(e.target.value)}>
                                  <option key={0} >Select education</option>
                                  {haridus.map(( value, index) =>(
                                      <option key={index+1} value={value}>{value}</option>
                                  ))
  
                                  }
                                  </Form.Select>
                              </Form.Group>
  
                              <div className="d-flex justify-content-center">
                                  <Button style={{ backgroundColor: '#A25F5F'}} type="submit" className="w-50">Подать заявку</Button>
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