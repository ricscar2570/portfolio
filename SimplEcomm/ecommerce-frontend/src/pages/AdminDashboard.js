// Admin Dashboard page to manage products, users, and orders



import React from 'react';

import { Link } from 'react-router-dom';



const AdminDashboard = () => {

  return (

    <div className="container mt-4">

      <h1>Admin Dashboard</h1>

      <div className="row">

        {/* Section for managing products */}

        <div className="col-md-4 mb-4">

          <div className="card">

            <div className="card-body">

              <h5 className="card-title">Manage Products</h5>

              <p className="card-text">Add, edit, or remove products from the store.</p>

              <Link to="/admin/products" className="btn btn-primary">

                Go to Products

              </Link>

            </div>

          </div>

        </div>



        {/* Section for managing users */}

        <div className="col-md-4 mb-4">

          <div className="card">

            <div className="card-body">

              <h5 className="card-title">Manage Users</h5>

              <p className="card-text">View and manage registered users.</p>

              <Link to="/admin/users" className="btn btn-primary">

                Go to Users

              </Link>

            </div>

          </div>

        </div>



        {/* Section for managing orders */}

        <div className="col-md-4 mb-4">

          <div className="card">

            <div className="card-body">

              <h5 className="card-title">Manage Orders</h5>

              <p className="card-text">Track and manage customer orders.</p>

              <Link to="/admin/orders" className="btn btn-primary">

                Go to Orders

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};



export default AdminDashboard;
