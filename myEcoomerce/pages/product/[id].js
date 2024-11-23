
import axios from 'axios';

export async function getServerSideProps({ params }) {
  const res = await axios.get(`http://localhost:5000/api/products/${params.id}`);
  return { props: { product: res.data } };
}

export default function ProductDetail({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
