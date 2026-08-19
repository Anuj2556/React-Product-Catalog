import { Link, useParams } from "react-router-dom";

export const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  if (!product) return <p>Loading product...</p>;

  return (
    <article>
      <Link to="/products">Back to products</Link>

      {/* <img src={product.thumbnail} alt={product.title} /> */}
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <strong>${product.price}</strong>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
    </article>
  );
};
