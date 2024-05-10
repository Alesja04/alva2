import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  const onClickLogout = () => {
    if (window.confirm('Are you sure want to log')) {
      // Удаление токена из localStorage
      window.localStorage.removeItem('token');
      navigate('/');
      window.location.reload();
    }
  };

  //import Cookies from 'js-cookie';
  //Cookies.remove('token', { path: '/' });//НЕ работает
  //Cookies.remove('token');
  return (
    <Container className="container mt-5 textAlign">
      <h2>Logout</h2>
      <Button onClick={onClickLogout} variant="danger">
        Logout
      </Button>
    </Container>
  );
}
