import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import Order from './Order';
const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => {
    summa += Number.parseFloat(el.price); //* el.quantity
  });
  return (
    <div>
      <p>
        <b>Count of products:</b> {props.orders.length}
        <b> Total price:</b> {new Intl.NumberFormat().format(summa)} €
      </p>

      <hr />
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <hr />
      <a href="/delivery" style={{ float: 'left', color: 'red', cursor: 'pointer' }}>
        Tellimine
      </a>

      <p
        style={{ float: 'right', color: 'red', cursor: 'pointer' }}
        onClick={() => props.onClearCart()}
      >
        Clear cart
      </p>
    </div>
  );
}; //
const showNothing = () => {
  return (
    <div className="empty">
      <h2>Your cart is empty</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = React.useState(false);
  return (
    <header id="header" className="header fixed-top header-scrolled mb-5">
      <Navbar
        sticky="top"
        expand="md"
        variant="white"
        className="justify-content-center"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <Nav>
          <Nav.Link href="/">
            <img src="../img/logo.png" alt="logo" width={130} height={50} />
          </Nav.Link>

          <Nav.Link style={{paddingTop: '20px'}} href="/#meist">MEIST</Nav.Link>
          <Nav.Link style={{paddingTop: '20px'}} href="/#menu">MENÜÜ</Nav.Link>
          <Nav.Link style={{paddingTop: '20px'}} href="/#contact">KONTAKTID</Nav.Link>
          <Nav.Link style={{paddingTop: '20px'}} href="/#reserveerimine">RESERVEERIMINE</Nav.Link>
          
          <Nav.Link href="/korzina">
            <img src="../img/tar.png" alt="logo" width={60} height={50} />
          </Nav.Link>
          <span style={{paddingTop: '20px'}}
            className={`nav-link shop-cart-button ${cartOpen && 'active'}`}
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
          >
            Cart ({props.orders.length})
          </span>

          {cartOpen && (
            <div className="shop-cart nav-link">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </Nav>
      </Navbar>
    </header>
  );
}
