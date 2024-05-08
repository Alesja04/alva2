import React from 'react';
import { Link } from "react-router-dom"
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
        <b>Toodete arv:</b> {props.orders.length}
        <b>Koguhind:</b> {new Intl.NumberFormat().format(summa)} €
      </p>

      <hr />
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <hr />
      <a href="/delivery" style={{ float: 'left', color: '#20CA31', cursor: 'pointer',  padding: '5px', marginTop: '15px', fontSize:'18px' }}>
        Tellimine
      </a> 

      {/* <Link to="/delivery" style={{ float: 'left', color: '#20CA31', cursor: 'pointer',  padding: '5px', marginTop: '15px', fontSize:'18px' }}>Tellimine</Link> */}

      <p
        style={{ float: 'right', color: '#F04040', cursor: 'pointer', paddingTop: '20px', fontSize:'17px' }}
        onClick={() => props.onClearCart()}
      >
        Tühjendage ostukorv
      </p>
    </div>
  );
}; //
const showNothing = () => {
  return (
    <div className="empty">
      <h2>Teie ostukorv on tühi</h2>
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

          <Nav.Link style={{ paddingTop: '20px',paddingLeft:'40px', fontSize:'20px' }} href="/#meist">MEIST</Nav.Link>
          <Nav.Link style={{ paddingTop: '20px', paddingLeft:'40px',fontSize:'20px' }} href="/#menu">MENÜÜ</Nav.Link>
          <Nav.Link style={{ paddingTop: '20px', paddingLeft:'40px',fontSize:'20px' }} href="/#contact">KONTAKTID</Nav.Link>
          <Nav.Link style={{ paddingTop: '20px', paddingLeft:'40px',paddingRight:'40px',fontSize:'20px' }} href="/#reserveerimine">RESERVEERIMINE</Nav.Link>

          <Nav.Link>
            <img src="../img/tar.png" alt="tarelka" width={60} height={50} />
          </Nav.Link>
          
          <span style={{ paddingTop: '20px', fontSize:'20px' }}
            className={`nav-link shop-cart-button ${cartOpen && 'active'}`}
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
          >
            <b>Korv</b> ({props.orders.length})
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
