
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item.product._id}>
            {item.product.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <button>Checkout</button>
    </div>
  );
}
