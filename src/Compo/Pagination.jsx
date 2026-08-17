import React, { useState } from "react";

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
        <p>No Products Found</p>
      ) : (
        <>
          {currProducts.map((product) => (
            <div key={product.id}>
                <hr />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <h4>Category: {product.category}</h4>
              <p>Price: ${product.price}</p>
              <hr />
            </div>
          ))}
          <div>
            <button
              disabled={currPage === 1}
              onClick={() => setCurrPage(currPage - 1)}
            >
              Previous
            </button>
            <span>
              {" "}
              Page {currPage} of {totalPages}{" "}
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
