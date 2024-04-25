import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from 'react-router-dom'; //id tooded by category

export default function Tooded() {
    const categories = [{"id":"1","title":"Magusad"}, {"id":"2","title":"Salatid"},{"id":"3","title":"Joogid"},{"id":"4","title":"Pasta"},{"id":"5","title":"Suupisted"}];
   // const [category, setCategory] = useState(categories[0]);
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const category = categories.find((cat) => cat.id === id);
    const title=category['title']
   // console.log(category['title']);
    useEffect(() => {
      const getProducts = async () => {
        const response = await axios.get(
          `http://localhost:5000/api/products/categories/${id}`
        );
        setProducts(response.data);
      };
      getProducts();
    }, [id]);
    return (
      <div
        className="mt-5"
        style={{
          height: "auto",
          width: "auto",
  
          backgroundColor: "#B5D6DA",
        }}
      >
        <Container className="text-center pb-3">
          <h1 style={{ textAlign: "center", paddingTop: 50 }}>{title}</h1>
  
          <Row style={{ paddingTop: 50 }}>
              {products.map((element, index) =>{
                  return (
                      <Col style={{ paddingTop: 15 }} xxl={4} key={element.id}>
                          <img src={element.img} alt="logo" width={220} height={200} />
                          <p>{element.name}</p>
                          <p>{element.price}</p>
                          <Button style={{ backgroundColor: "rgb(255,255,255,0)" }}>
                          LISA OSTUKORVI
                          </Button>
                      </Col>
                  )
              })}
            
  
          </Row>
        </Container>
      </div>
    );
  }
  