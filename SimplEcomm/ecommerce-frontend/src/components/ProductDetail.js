// Product detail page to display information about a single product



import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addItem } from '../store/slices/cartSlice';

import axios from 'axios';



const ProductDetail = () => {

  const { id } = useParams(); // Get product ID from the URL

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);



  useEffect(() => {

    // Fetch product details from the server

    const fetchProduct = async () => {

      try {

        const response = await axios.get(`/api/products/${id}`);

        setProduct(response.data);

      } catch (err) {

        setError('Failed to load product details.');

      } finally {

        setLoading(false);

      }

    };



    fetchProduct();

  }, [id]);



  const handleAddToCart = () => {

    dispatch(addItem({ id: product._id, name: product.name, price: product.price, quantity }));

    alert('Product added to cart!');

  };



  if (loading) {

    return <p>Loading product details...</p>;

  }



  if (error) {

    return <p>{error}</p>;

  }



  return (

    <div className="container mt-4">

      <div className="row">

        <div className="col-md-6">

          <img src={product.image} alt={product.name} className="img-fluid" />

        </div>

        <div className="col-md-6">

          <h1>{product.name}</h1>

          <p>{product.description}</p>

          <h3>{product.price.toFixed(2)} €</h3>

          <div className="d-flex align-items-center mb-3">

            <label htmlFor="quantity" className="form-label me-2">Quantity:</label>

            <input

              type="number"

              id="quantity"

              className="form-control w-auto"

              min="1"

              value={quantity}

              onChange={(e) => setQuantity(Number(e.target.value))}

            />

          </div>

          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>

        </div>

      </div>

    </div>

  );

};



export default ProductDetail;

"""



# Write the updated content to the file

with open(product_detail_path, 'w') as f:

    f.write(product_detail_complete_content)



# Re-read the file content to verify it has been updated

with open(product_detail_path, 'r') as f:

    updated_product_detail_content = f.read()



updated_product_detail_content;