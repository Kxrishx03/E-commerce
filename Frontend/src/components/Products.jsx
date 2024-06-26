import { useEffect } from "react";
import {popularProducts } from "../Data";
import { Product } from "./Productitem";
import axios from "axios";
import { useState } from "react";

export function Products({cat,filters,sort}){

    const [products,setProducts] = useState([]);
    const [filteredproducts,setFilteredproducts] = useState([]);

    useEffect(()=>{
       const getProducts = async () => {
            
            try{

              const res = await axios.get("http://localhost:3000/api/products");
              console.log(res);

            } catch(err) {
               console.log(err);
            }
       }
       getProducts();
    },{cat});

    

    return (
        <div className="product-container">
          {popularProducts.map((item) => (
            <Product item={item }  key = { item.id}/>
          ))}
        </div>
    )
}