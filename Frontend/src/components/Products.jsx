import { useEffect } from "react";
import { Product } from "./Productitem";
import axios from "axios";
import { useState } from "react";

export function Products({ cat, filters , sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
      const getProducts = async () => {
          try {
              const res = await axios.get(
                  cat
                      ? `http://localhost:3000/api/products?category=${cat}`
                      : "http://localhost:3000/api/products"
              );
             
              if (res.data && Array.isArray(res.data.products)) {
                  setProducts(res.data.products);
              } else {
                  console.warn("API did not return an array:", res.data);
                  setProducts([]);
              }
          } catch (err) {
              console.error("Error fetching products:", err);
              setProducts([]);
          }
      };
      getProducts();
  }, [cat]);

  useEffect(() => {
    
    if (cat) {
        const filtered = products.filter(item => {
            const entries = Object.entries(filters);
            return entries.every(([key, value]) => {
                const itemValue = item[key]; // Check if item[key] is undefined
                console.log(`Key: ${key}, Value: ${value}, Item Value:`, itemValue);
                return itemValue && itemValue.includes(value); // Check if itemValue is defined before calling includes
            });
        });
        setFilteredProducts(filtered);
        console.log("Filtered products:", filtered); // Debugging log
    } else {
        setFilteredProducts(products);
    }
}, [products, cat, filters]);

useEffect(()=>{
     if(sort==="newest"){
      setFilteredProducts(prev =>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      );
     }else if (sort === 'price-asc'){
      setFilteredProducts(prev =>
        [...prev].sort((a,b)=>a.price - b.price)
      );
     }else {
      setFilteredProducts(prev =>
        [...prev].sort((a,b)=>b.price - a.price)
      );
     }
},[sort]);


  return (
      <div className="product-container">
          {cat ? filteredProducts.map((item) => (
              <Product item={item} key={item.id} />
          )) : products.slice(0,8).map((item) => (
            <Product item={item} key={item._id} />
          )) }
      </div>
  );
}