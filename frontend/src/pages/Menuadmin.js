import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, ModalHeader, Row, Col } from 'react-bootstrap';
import categories from '../data/categories.json';

export default function Menuadmin() {
  const [products, setProducts] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [id, setId] = useState();
 // const [category,setCategory]=useState();

  const [showModal, setShowModal] = useState(false);

  const getProducts = async () => {
    const result = await axios.get('http://localhost:5000/products');
    setProducts(result.data);
    //console.log(result.data);
  };
  useEffect(() => {
    getProducts();
  }, []);



  const showmodal = (product) => {
    setShowModal(true);
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
  };

  const closemodal = () => {
    setShowModal(false);
    setId(null);
    setName(null);
    setPrice(null);
  };

  const handleEdit = async () => {
    await axios.patch('http://localhost:5000/products/' + id, {
      name: name,
      price: price,
    });
    getProducts();
    closemodal();
  };

  const handleDelete = async (productId) => {
    await axios.delete('http://localhost:5000/products/' + productId);
    getProducts();
  };

  return (
    <>
      <Container>
        <h1 style={{ marginTop: 50 }}>Menüü muutmine</h1>
        <table style={{ paddingTop: 20 }} className="table">
          <thead>
            <tr>
              <th>Toode nimetus</th>
              <th>Kategoori</th>
              <th>Hind</th>
              <th>Pilt</th>
              <th>Tegevus</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{categories[(product.category_id)-1].name}</td>
                  <td>{product.price}</td>
                  <td>
                    <img src={product.img} alt="toot" width={60} height={50} />
                    <br />
                    {product.img}
                  </td>
                  <td>
                    <Button variant="primary" onClick={() => showmodal(product)}>
                      Muuda
                    </Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(product.id)}>
                      Kustuta
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
      <Modal show={showModal} onHide={closemodal}>
        <ModalHeader closeButton></ModalHeader>
        <Modal.Body>
          <Row>
            <Col>Product</Col>
            <Col>Price</Col>
          </Row>
          <Row>
            <Col>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Col>
            <Col>
              <input
                type="number"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row className="mt-2 text-end">
            <Col>
              <Button onClick={handleEdit} value="save">
                Save
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
