import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Delivery from './Pages/Delivery/Delivery';
import Reviews from './Pages/Reviews/Reviews';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div className='Global-Img img-fluid' alt='logo' data-stellar-background-ratio="0.3">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <About />
              <Service />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/delivery"
          element={
            <>
              <Delivery />
            </>
          }
        />
        <Route
          path="/reviews"
          element={
            <>
              <Reviews />
            </>
          }
        />
      </Routes>
    </div>
  </Router>
);
