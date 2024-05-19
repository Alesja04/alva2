import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Order from './Order';
import {jwtDecode} from 'jwt-decode';

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
      <a
        href="/delivery"
        style={{
          float: 'left',
          color: '#20CA31',
          cursor: 'pointer',
          padding: '5px',
          marginTop: '15px',
          fontSize: '18px',
        }}
      >
        Tellimine
      </a>

      <p
        style={{
          float: 'right',
          color: '#F04040',
          cursor: 'pointer',
          paddingTop: '20px',
          fontSize: '17px',
        }}
        onClick={() => props.onClearCart()}
      >
        Tühjendage ostukorv
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Teie ostukorv on tühi</h2>
    </div>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [role, setRole] = React.useState('');

  const onClickLogout = () => {
    if (window.confirm('Kas soovite kindlasti logida?')) {
      window.localStorage.removeItem('token');
      window.location.assign('/');
    }
  };

  React.useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
        setState(true);
      } else {
        setState(false);
      }
    } catch (error) {
      if (error.response) {
        // Handle error
      }
    }
  };

  return (
    <header id="header" className="header fixed-top header-scrolled mb-5">
      <Navbar
        sticky="top"
        expand="md"
        variant="white"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <Navbar.Brand href="/" style={{ paddingLeft: '20px' }}>
          <img src="../img/logo.png" alt="logo" width={130} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto" style={{ alignItems: 'center' }}>
            <Nav.Link href="/#meist" style={{ paddingTop: '20px', paddingLeft: '20px', fontSize: '20px' }}>
              MEIST
            </Nav.Link>
            <Nav.Link href="/#menu" style={{ paddingTop: '20px', paddingLeft: '20px', fontSize: '20px' }}>
              MENÜÜ
            </Nav.Link>
            <Nav.Link href="/#contact" style={{ paddingTop: '20px', paddingLeft: '20px', fontSize: '20px' }}>
              KONTAKTID
            </Nav.Link>
            <Nav.Link href="/#reserveerimine" style={{ paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px', fontSize: '20px' }}>
              RESERVEERIMINE
            </Nav.Link>
            <Nav.Link>
              <img src="../img/tar.png" alt="tarelka" width={60} height={50} />
            </Nav.Link>
            <span
              style={{ paddingTop: '20px', fontSize: '20px', cursor: 'pointer' }}
              className={`nav-link shop-cart-button ${cartOpen && 'active'}`}
              onClick={() => setCartOpen(!cartOpen)}
            >
              <b>Korv</b> ({props.orders.length})
            </span>
            {cartOpen && (
              <div className="shop-cart nav-link" style={{marginTop:'450px'}}>
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
            {state && role === 'admin' && (
              <>
                <Nav.Link href="/adminmenu" style={{ paddingTop: '20px', paddingLeft: '20px', fontSize: '20px' }}>
                  Manage Products
                </Nav.Link>
                <Nav.Link onClick={onClickLogout} style={{ paddingTop: '20px', paddingLeft: '20px', fontSize: '20px' }}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}