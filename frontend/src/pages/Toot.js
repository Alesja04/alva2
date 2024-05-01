import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';

export default class Jook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const { hover } = this.state;

    return (
      <Col style={{ paddingTop: 15 }} lg="4">
        <img src={this.props.item.img} alt="toot" width={220} height={200} />
        <p> {this.props.item.name}</p>
        <b><p>{this.props.item.price} €</p></b>

        <Button
          style={{
            backgroundColor: hover ? 'transparent' : '#F5F5F5', // фон при наведении
            borderColor: '#000000', // Цвет границы
            borderRadius: '40px',
            padding: '10px 40px 10px 40px',
            color: hover ? '#F5F5F5' : '#000000', // Цвет текста
            transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease' // Плавный переход
          }}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
          onClick={() => this.props.onAdd(this.props.item)}
        >
          LISA OSTUKORVI
        </Button>
      </Col>
    );
  }
}