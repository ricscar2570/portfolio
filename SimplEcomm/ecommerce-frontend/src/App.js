// Main entry point for the React application



import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'; // Navbar component

import Home from './pages/Home'; // Home page

import ProductDetail from './components/ProductDetail'; // Product detail component

import Cart from './pages/Cart'; // Cart page

import Checkout from './pages/Checkout'; // Checkout page

import AdminDashboard from './pages/AdminDashboard'; // Admin dashboard



const App = () => {

  return (

    <Router>

      <div>

        {/* Navbar displayed on all pages */}

        <Navbar />

        <main className="container mt-4">

          <Routes>

            {/* Route definitions */}

            <Route path="/" element={<Home />} />

            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/admin" element={<AdminDashboard />} />

          </Routes>

        </main>

      </div>

    </Router>

  );

};



export default App;
