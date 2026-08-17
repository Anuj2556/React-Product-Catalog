import React, { useEffect ,useState} from 'react'
import axios from 'axios'

export default function useFetchData() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.
            get("https://dummyjson.com/products")
            .then((res)=>{
                setProducts(res.data.products)
            })
            .catch((err)=> console.log("Failed to fetch data"))
    },[])


  return products
}
