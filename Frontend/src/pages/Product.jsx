import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

export function Product(){
    return (
        <div className="product-container-page">
           <Navbar />
           <Announcement />
           
           <div className="wrapper-product-page">

               <div className="product-page-image-conatiner">
                   <img src="https://131243773.cdn6.editmysite.com/uploads/1/3/1/2/131243773/s295098622388748641_p6518_i1_w570.png?width=2400&optimize=medium" alt="image" />
               </div>

               <div className="product-page-info-container">
                    
                    <div className="product-page-info-title">
                     <h1>MEN'S JAKE GUITAR VINTAGE CRUSHER TEE </h1>
                    </div>

                    <div className="product-page-desc">
                       <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sint incidunt itaque voluptate commodi odit veritatis pariatur quam ex repellendus, quod nihil libero explicabo magni velit, soluta, fuga tempore accusamus!
                       </p>
                    </div>

                    <div className="price-pp">
                        $30.09
                    </div>

                    <div className="product-page-filter-container">
                     <div className="filter-product-page">
                      <div className="filter-text-product-page">Color</div>
                       <select name="Color" id="Color"        className="select-filter-page">
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
                     </div> 
                       
                      <div className="filter-product-page">
                      <div className="filter-text-product-page">Size</div> 
                      <select id="sizes" name="sizes"        className="select-filter-page">
                   <option value="xs">Extra Small (XS)</option>
                   <option value="s">Small (S)</option>
                   <option value="m">Medium (M)</option>
                   <option value="l">Large (L)</option>
                   <option value="xl">Extra Large (XL)</option>
                   <option value="xxl">Double Extra Large (XXL)</option>
                      </select>
                      </div>

                    </div>

                    <div className="add-product-page-container">
                         
                         <div className="amount-container-product-page">
                             
                             <div className="remove-button">-</div>
                             
                             <div className="amount-pp">1</div>
                             <div className="add-button">+</div>

                         </div>

                         <div className="add-to-cart-btn-pp"><button>ADD TO CART</button></div>

                    </div>

               </div>

           </div>

           <Newsletter />
           <Footer />
        </div>
    )
}