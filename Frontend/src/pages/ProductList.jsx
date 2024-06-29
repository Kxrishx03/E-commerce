import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { useLocation } from 'react-router-dom';
import { useState } from "react";

export function ProductList(){

    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        });
    }
     
    return (
        <div className="productList-container">
        
         <Navbar />
         <Announcement />

         <div className="title-dress-product">
            <h1>{cat}</h1>
         </div>

         <div className="product-filter-container">

            <div className="filter-product">
              <div className="filter-text-product">
                Filter Products:

                <select name="color" id="Color" className="select-filter" onChange={handleFilters}>
                    <option value="Color">Color</option>
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="purple">purple</option>
                    <option value="pink">pink</option>
                    <option value="brown">brown</option>
                    <option value="black">black</option>
                    <option value="white">white</option>
                </select>

                <select id="sizes" name="size" className="select-filter" onChange={handleFilters}>
                   <option value="XS">Extra Small (XS)</option>
                   <option value="S">Small (S)</option>
                   <option value="M">Medium (M)</option>
                   <option value="L">Large (L)</option>
                   <option value="XL">Extra Large (XL)</option>
                   <option value="xxl">Double Extra Large (XXL)</option>
                </select>
              </div>
            </div>

            <div className="filter-product">
            <div className="filter-text-product">
                Sort Products:
                <select id="sortOptions" name="sortOptions" className="select-filter" onChange={(e)=>setSort(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>

              
            </div>

         </div>

         <Products cat={cat} filters={filters} sort={sort} />
         <Newsletter />
         <Footer />
        </div>
    )
}