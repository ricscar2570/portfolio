// Home page to display a list of products



import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../store/slices/productSlice';

import ProductList from '../components/ProductList';



const Home = () => {

  const dispatch = useDispatch();

  const { items: products, status } = useSelector((state) => state.products);



  useEffect(() => {

    // Fetch products when the component loads

    dispatch(fetchProducts());

  }, [dispatch]);



  return (

    <div className="container mt-4">

      <h1>Welcome to Our Store</h1>

      {status === 'loading' && <p>Loading products...</p>}

      {status === 'failed' && <p>Failed to load products. Please try again later.</p>}

      {status === 'success' && (

        <div className="row">

          {products.length === 0 ? (

            <p>No products available.</p>

          ) : (

            <ProductList products={products} />

          )}

        </div>

      )}

    </div>

  );

};



export default Home;
