import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

export default function Supisted() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/products/categories/5`
      );
      setProducts(response.data);
    };
    getProducts();
  }, []);
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
        <h1 style={{ textAlign: "center", paddingTop: 50 }}>SUUPISTED</h1>

        <Row style={{ paddingTop: 50 }}>
			{products.map((element, index) =>{
				return (
					<Col style={{ paddingTop: 15 }} xxl={4}>
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
