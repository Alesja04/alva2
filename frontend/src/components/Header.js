import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Order from './Order';
import { jwtDecode } from 'jwt-decode';

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
  let [cartOpen, setCartOpen] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [role, setRole] = React.useState('');

  const onClickLogout = () => {
    if (window.confirm('Kas soovite kindlasti logida?')) {
      // Удаление токена из localStorage
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
        <Navbar.Brand href="/" style={{ marginLeft: 280 }}>
          <img src="../img/logo.png" alt="logo" width={130} height={50} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" style={{ marginLeft: '120px' }}>
            <Nav.Link style={{ fontSize: '25px', marginLeft: 10 }} href="/#meist">
              MEIST
            </Nav.Link>
            <Nav.Link style={{ fontSize: '25px', marginLeft: 10 }} href="/#menu">
              MENÜÜ
            </Nav.Link>
            <Nav.Link style={{ fontSize: '25px', marginLeft: 10 }} href="/#contact">
              KONTAKTID
            </Nav.Link>
            <Nav.Link style={{ fontSize: '25px', marginLeft: 10 }} href="/#reserveerimine">
              RESERVEERIMINE
            </Nav.Link>
          </Nav>
          <Nav.Link>
            <img src="../img/tar.png" alt="tarelka" width={60} height={50} />
          </Nav.Link>

          <span
            className={`nav-link shop-cart-button ${cartOpen && 'active'}`}
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            style={{ marginRight: 200 }}
          >
            <b>Korv</b> ({props.orders.length})
          </span>

          {cartOpen && (
            <div className="shop-cart nav-link">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
          {state && role === 'admin' && (
            <>
              <Nav.Link style={{ fontSize: '20px' }} href="/adminmenu">
                Toodete haldamine
              </Nav.Link>
              <Nav.Link style={{ fontSize: '20px' }} onClick={onClickLogout}>
                Välja
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}