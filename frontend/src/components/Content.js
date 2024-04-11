import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Pasta from '../pages/Pasta.js';
import Suupisted from '../pages/Suupisted.js';
import Salatid from '../pages/Salatid.js';
import Joogid from '../pages/Joogid.js';
import Magusad from '../pages/Magusad.js';
//----------
//import MainScreen from '../components/MainScreen';
//import Menu from '../components/Menu';
//import Reserveerimine from '../components/Reserveerimine';
//import About from '../components/About';
//import Contact from '../components/Contact';
// import Header from './components/Header.js';

export default function Content() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

         

          <Route exact path="/pasta" element={<Pasta />} />
          <Route exact path="/joogid" element={<Joogid />} />
          <Route exact path="/salatid" element={<Salatid />} />
          <Route exact path="/suupisted" element={<Suupisted />} />
          <Route exact path="/magusad" element={<Magusad />} />
        </Routes>
      </Router>
    </>
  );
}
