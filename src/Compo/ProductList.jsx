import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

export const ProductList = ({ products }) => {
  const [params, setParams] = useSearchParams();

  const search = params.get("search") || "";
  const category = params.get("category") || "all";
  const sort = params.get("sort") || "low";
  const updateFilter = (name, value) => {
    const nextParams = new URLSearchParams(params);
    if (value) {
      nextParams.set(name, value);
    } else {
      nextParams.delete(name);
    }
    if (name !== "page") {
      nextParams.set("page", "1");
    }
    setParams(nextParams);
  };
  let filteredProductes = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((product) => category === "all" || product.category === category)
    .toSorted((a, b) =>
      sort === "low" ? a.price - b.price : b.price - a.price,
    );

  return (
    <>
      <div className="filter-section">
        <input
         type="text"
          value={search}
          onChange={(e) => updateFilter("search", e.target.value)}
          placeholder="Enter to Search the product"
        />
        <select value={sort} onChange={(e) => updateFilter("sort", e.target.value)}>
          <option value="low">Low To High</option>
          <option value="high">High To Low</option>
        </select>
        <select
          value={category}
          onChange={(e) => updateFilter("category", e.target.value)}
        >
          <option value="all">All</option>
          <option value="beauty">beauty</option>
          <option value="fragrances">fragrances</option>
          <option value="furniture">furniture</option>
          <option value="groceries">groceries</option>
        </select>

        <Pagination filteredProductes={filteredProductes} />
      </div>
    </>
  );
};
