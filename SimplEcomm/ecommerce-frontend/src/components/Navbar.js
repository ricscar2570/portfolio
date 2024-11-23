// Navbar component to display the navigation bar



import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';



const Navbar = () => {

  const cart = useSelector((state) => state.cart);



  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container-fluid">

        <Link className="navbar-brand" to="/">E-Commerce</Link>

        <button

          className="navbar-toggler"

          type="button"

          data-bs-toggle="collapse"

          data-bs-target="#navbarNav"

          aria-controls="navbarNav"

          aria-expanded="false"

          aria-label="Toggle navigation"

        >

          <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">

            <li className="nav-item">

              <Link className="nav-link" to="/cart">

                Cart <span className="badge bg-secondary">{cart.totalQuantity}</span>

              </Link>

            </li>

            <li className="nav-item">

              <Link className="nav-link" to="/admin">Admin</Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>

  );

};



export default Navbar;
