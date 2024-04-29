import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';

export default class Jook extends Component {
  render() {
    return (
      <Col style={{ paddingTop: 15 }} lg="4">
        <img src={this.props.item.img} alt="logo" width={220} height={200} />
        <p> {this.props.item.name}</p>
        <p>{this.props.item.price} €</p>

        <Button
          style={{ backgroundColor: 'rgb(255,255,255,0)' }}
          onClick={() => this.props.onAdd(this.props.item)}
        >
          LISA OSTUKORVI
        </Button>
      </Col>
    );
  }
}
