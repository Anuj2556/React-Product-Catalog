import "./App.css";
import useFetchData from "./Compo/useFetchData";
import { ProductList } from "./Compo/ProductList";
import { ProductDetail } from "./Compo/ProductDetail";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  const {products,error,loading,retry} = useFetchData();

  if(loading) return <p>Loading Products ...🔃</p>

  if(error) {
  return <div>
    <p>{error}</p>
    <button onClick={retry}>Retry</button>
  </div>}

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
