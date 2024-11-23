
import axios from 'axios';
import Link from 'next/link';

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:5000/api/products'); // API backend
  return { props: { products: res.data } };
}

export default function Home({ products }) {
  return (
    <div>
      <h1>Welcome to myEcommerce!</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link href={`/product/${product._id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
