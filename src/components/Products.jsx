import {popularProducts } from "../Data";
import { Product } from "./Productitem";

export function Products(){
    return (
        <div className="product-container">
          {popularProducts.map((item) => (
            <Product item={item }  key = { item.id}/>
          ))}
        </div>
    )
}