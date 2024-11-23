// Component to display a list of products



import React from 'react';

import { Link } from 'react-router-dom';



const ProductList = ({ products }) => {

  return (

    <div className="row">

      {products.map((product) => (

        <div key={product._id} className="col-md-4 mb-4">

          <div className="card h-100">

            <img src={product.image} className="card-img-top" alt={product.name} />

            <div className="card-body">

              <h5 className="card-title">{product.name}</h5>

              <p className="card-text">{product.description.substring(0, 100)}...</p>

              <h6 className="card-text">{product.price.toFixed(2)} €</h6>

              <Link to={`/product/${product._id}`} className="btn btn-primary">

                View Details

              </Link>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

};



export default ProductList;
