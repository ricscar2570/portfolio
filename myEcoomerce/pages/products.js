
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:5000/api/products');
  return { props: { products: res.data } };
}

export default function Products({ products }) {
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
