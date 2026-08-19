import { Link, useParams } from "react-router-dom";

export const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  if (!product) return <p>Loading product...</p>;

  return (
    <article className="product-detail">
      <Link className="back-link" to="/products">
        Back to products
      </Link>

      <div className="product-detail-content">
        <img className="product-detail-image" src={product.thumbnail} alt={product.title} />
        <div className="product-detail-info">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
          <div className="product-detail-meta">
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
          </div>
          <strong className="product-detail-price">${product.price}</strong>
        </div>
      </div>
    </article>
  );
};
