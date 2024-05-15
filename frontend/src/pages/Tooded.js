import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Toot from './Toot';
import CategoryLink from '../components/CategoryLink';
import categories from '../data/categories.json';
import baseURL from '../config';

export default function Tooded(props) {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const category = categories.find((cat) => cat.id === id);
  const name = category['name'];
  const st = category['st'];

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`${baseURL}/products/categories/${id}`);
      setProducts(response.data);
    };
    getProducts();
  }, [id]);
  return (
    <div
      className="mt-5 h-100"
      style={{
        height: 'auto',
        width: 'auto',
        backgroundColor: st,
      }}
    >
      <Container className="text-center pb-3">
        <CategoryLink />

        <h1 style={{ textAlign: 'center', paddingTop: 50 }}>{name}</h1>

        <Row style={{ paddingTop: '50px' }}>
          {products.map((el) => (
            <Toot key={el.id} item={el} onAdd={props.onAdd} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
