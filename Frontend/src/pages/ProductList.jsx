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

    const handleFilters= (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        });
    }
     
    return (
        <div className="productList-container">
         <Announcement />
         <Navbar />

         <div className="title-dress-product">
            <h1>Dresses</h1>
         </div>

         <div className="product-filter-container">

            <div className="filter-product">
              <div className="filter-text-product">
                Filter Products:

                <select name="Color" id="Color" className="select-filter" onChange={handleFilters}>
                    <option value="Color">Color</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="brown">Brown</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                </select>

                <select id="sizes" name="sizes" className="select-filter" onChange={handleFilters}>
                   <option value="xs">Extra Small (XS)</option>
                   <option value="s">Small (S)</option>
                   <option value="m">Medium (M)</option>
                   <option value="l">Large (L)</option>
                   <option value="xl">Extra Large (XL)</option>
                   <option value="xxl">Double Extra Large (XXL)</option>
                </select>
              </div>
            </div>

            <div className="filter-product">
            <div className="filter-text-product">
                Sort Products:
                <select id="sortOptions" name="sortOptions" className="select-filter" onChange={e=>setSort(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>

              
            </div>

         </div>

         <Products cat={cat} filters={filters} sort={sort}/>
         <Newsletter />
         <Footer />
        </div>
    )
}