import "./App.css";
import useFetchData from "./Compo/useFetchData";
import { ProductList } from "./Compo/ProductList";
import { ProductDetail } from "./Compo/ProductDetail";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  const products = useFetchData();

  return (
    <Routes>
      <Route path='/products' element={<ProductList products={products}/>}/>
      <Route
        path="/products/:id"
        element={<ProductDetail products={products} />}
      />
      <Route path="*" element={<Navigate to="/products" replace />} />
    </Routes>
  );
}

export default App;
