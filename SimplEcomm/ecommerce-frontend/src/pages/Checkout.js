// Cart page to display and manage items in the shopping cart



import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { updateQuantity, removeItem } from '../store/slices/cartSlice';



const Cart = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);



  const handleQuantityChange = (id, quantity) => {

    if (quantity > 0) {

      dispatch(updateQuantity({ id, quantity }));

    }

  };



  const handleRemoveItem = (id) => {

    dispatch(removeItem({ id }));

  };



  return (

    <div className="container mt-4">

      <h1>Shopping Cart</h1>

      {cart.items.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        <div>

          <table className="table table-striped">

            <thead>

              <tr>

                <th>Product</th>

                <th>Price</th>

                <th>Quantity</th>

                <th>Total</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {cart.items.map((item) => (

                <tr key={item.id}>

                  <td>{item.name}</td>

                  <td>{item.price.toFixed(2)} €</td>

                  <td>

                    <input

                      type="number"

                      value={item.quantity}

                      min="1"

                      className="form-control"

                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}

                    />

                  </td>

                  <td>{(item.price * item.quantity).toFixed(2)} €</td>

                  <td>

                    <button

                      className="btn btn-danger btn-sm"

                      onClick={() => handleRemoveItem(item.id)}

                    >

                      Remove

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <div className="mt-4">

            <h4>Total Quantity: {cart.totalQuantity}</h4>

            <h4>Total Price: {cart.totalPrice.toFixed(2)} €</h4>

            <button className="btn btn-primary">Proceed to Checkout</button>

          </div>

        </div>

      )}

    </div>

  );

};



export default Cart;
