import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      orders: JSON.parse(localStorage.getItem('orders')) || [],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount() {
    const getItems = async () => {
      const response = await axios.get(`http://localhost:5000/api/products/`);
      this.setState({ items: response.data });
    };
    getItems();
  }

  deleteOrder(id) {
    const newOrders = this.state.orders.filter((el) => el.id !== id);
    this.setState({ orders: newOrders }, () => {
      localStorage.setItem('orders', JSON.stringify(newOrders));
    });
  }

  clearCart() {
    const newOrders = [];
    this.setState({ orders: newOrders }, () => {
      localStorage.setItem('orders', JSON.stringify(newOrders));
      //window.location.href = '/tooded/1';
    });
  }

  addToOrder(item) {
    const newOrders = [...this.state.orders];
    const existingOrderIndex = newOrders.findIndex((el) => el.id === item.id);

    if (existingOrderIndex === -1) {
      newOrders.push(item);
      this.setState({ orders: newOrders }, () => {
        localStorage.setItem('orders', JSON.stringify(newOrders));
      });
    }
  }

  render() {
    return (
      <>
        <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          onClearCart={this.clearCart}
        />
        <Content items={this.state.items} onAdd={this.addToOrder} clearCart={this.clearCart} />
        <Footer />
      </>
    );
  }
}
