import { useState } from "react";
import "./App.css";
import useFetchData from "./Compo/useFetchData";
import Pagination from "./Compo/Pagination";

function App() {
  const [list, setList] = useState();
  const [search, setSearch] = useState("");
  const products = useFetchData();
  const [lowFirst,setLowFirst]=useState("true")
  const [category,setCategory]=useState("all")
  
  let filteredProductes=products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
  if(category !== "all"){
    filteredProductes=filteredProductes.filter((product)=> product.category === category)
  }
  if(lowFirst==="true") {
    filteredProductes.sort((a,b)=>a.price-b.price)
  }
  else {
    filteredProductes.sort((a,b)=>b.price-a.price)
  }

  
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter to Search the product"
      />
      <select onChange={(e)=>setLowFirst(e.target.value)}>
        <option value={true}>Low To High</option>
        <option value={false}>High To Low</option>
      </select>

      <select onChange={(e)=>{setCategory(e.target.value)}}>
        <option value="all">All</option>
        <option value="beauty">beauty</option>
        <option value="fragrances">fragrances</option>
        <option value="furniture">furniture</option>
        <option value="groceries">groceries</option>
      </select>


      <Pagination filteredProductes={filteredProductes} />

    </>
  );
}

export default App;
