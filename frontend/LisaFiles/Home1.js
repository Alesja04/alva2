// import React, { useRef } from 'react';
// //import {Container} from 'react-bootstrap';
// import MainScreen from '../components/MainScreen';
// import Menu from '../components/Menu';
// import Reserveerimine from '../components/Reserveerimine';
// import About from '../components/About';
// //import Events from '../components/Events';
// //import Delivery from '../components/Delivery';
// import Contact from '../components/Contact';
// import { Nav, Navbar } from 'react-bootstrap';

// export default function Home1() {
//   const mainscreenRef = useRef();
//   const aboutRef = useRef();
//   const menuRef = useRef();
//   const reserveerimineRef = useRef();
//   const contactRef = useRef();

//   function aboutClick() {
//     aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   function menuClick() {
//     menuRef.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   function reserveerimineClick() {
//     reserveerimineRef.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   function contactClick() {
//     contactRef.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   //-----to top
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <>
//       <Navbar
//         sticky="top"
//         expand="md"
//         variant="white"
//         className="justify-content-center"
//         style={{ backgroundColor: '#F5F5F5' }}
//       >
//         <Nav>
//           <Nav.Link onClick={scrollToTop}>
//             <img src="../img/logo.png" alt="logo" width={130} height={50} />
//           </Nav.Link>
//           <Nav.Link onClick={aboutClick}>MEISTScroll</Nav.Link>
//           <Nav.Link onClick={menuClick}>MENÜÜ</Nav.Link>
//           <Nav.Link onClick={contactClick}>KONTAKTID</Nav.Link>
//           <Nav.Link onClick={reserveerimineClick}>RESERVEERIMINE</Nav.Link>
//           <Nav.Link>
//             <img src="../img/tar.png" alt="logo" width={60} height={50} />
//           </Nav.Link>

//           {/* <Nav.Link onClick={contactClick}>Contact</Nav.Link>
//                 <Nav.Link onClick={regformClick}>Register</Nav.Link>
//                 <Nav.Link href="http://localhost:5000/zajavka/" target="_blank">Register List</Nav.Link> */}
//         </Nav>
//       </Navbar>

//       <section ref={mainscreenRef} className="pt-0">
//         <MainScreen menuRef={menuClick} />
//       </section>

//       <section id="meist" ref={aboutRef} className="pt-2">
//         <About />
//       </section>

//       <section id="menu" ref={menuRef} className="pt-5">
//         <Menu />
//       </section>

//       <section id="contact" ref={contactRef} className="pt-5">
//         <Contact />
//       </section>

//       <section id="reserveerimine" ref={reserveerimineRef} className="pt-5">
//         <Reserveerimine />
//       </section>
//     </>
//   );
// }
