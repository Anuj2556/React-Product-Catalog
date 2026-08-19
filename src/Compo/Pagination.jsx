import { useState } from "react";
import { Link } from "react-router-dom";

export default function Pagination({ filteredProductes }) {
  const [currPage, setCurrPage] = useState(1);
  const productsPerPage = 3;
  const startIndex = (currPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currProducts = filteredProductes.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProductes.length / productsPerPage);
  return (
    <>
      {filteredProductes.length === 0 ? (
        <p className="no-products">No Products Found</p>
      ) : (
        <>
          <div className="products-container">
            {currProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="product-card product-card-link"
              >
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4>Category: {product.category}</h4>
                <p>Price: ${product.price}</p>
              </Link>
            ))}
          </div>
          <div className="pagination-controls">
            <button
              disabled={currPage === 1}
              onClick={() => setCurrPage(currPage - 1)}
            >
              Previous
            </button>
            <span className="page-indicator">
              Page {currPage} of {totalPages}
            </span>
            <button
              disabled={currPage === totalPages}
              onClick={() => setCurrPage(currPage + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}
