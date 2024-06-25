import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";

export function Cart(){
    return (
        <div className="cart-container">
        <Navbar />
        <Announcement />
             
             <div className="cart-wrapper">
                <h1 className="cart-title">
                    YOUR BAG
                </h1>

                <div className="top-cart">
                    <button className="top-cart-btn-a">CONTINUE SHOPPING</button>
                    <div className="top-cart-texts">
                     <span className="top-cart-text">
                       Shopping Bag(2)
                     </span>
                     <span className="top-cart-text">
                       Your wishlist(0)
                     </span>
               </div>

                
                    <button className="top-cart-btn-b">CHECKOUT NOW</button>
                </div>

                <div className="bottom-cart">
                    <div className="bottom-cart-info">

                     <div className="product-cart">
                        <div className="info-product-detail-cart">
                            <img src="https://remixvintageshoes.com/cdn/shop/products/Re-Mix-Amazon-Black-Left_900x.jpg?v=1674518069" alt="" className="cart-image" />
                            <div className="detail-cart">
                            <div className="product-name-cart"><b>PRODUCT:</b>RE-MIX VINTAGE SHOES</div>
                            <div className="product-id-cart"><b>ID:</b>23451045E</div>
                            <div className="product-color-cart"><b>COLOR:</b>
                            <div className="product-color-cart-a"></div></div>
                            <div className="product-size-cart"><b>SIZE:</b>37.5</div> 
                           </div> 
                    </div>

                        <div className="price-cart-detail">
                                
                             <div className="amount-container-cart-page">
                                 <div className="remove-button-cart">-</div>
                                 <div className="amount-cp">1</div>
                                 <div className="add-button-cart">+</div>
                             </div>

                             <div className="actual-price-cp">
                                $30.09
                             </div>

                        </div>

                     </div>

                       <hr className="line-cart" />

                     <div className="product-cart">
                        <div className="info-product-detail-cart">
                            <img src="https://remixvintageshoes.com/cdn/shop/products/Re-Mix-Aviator-Blue-Combo-Right2_900x.jpg?v=1674518330" alt="" className="cart-image" />
                            <div className="detail-cart">
                            <div className="product-name-cart"><b>PRODUCT:</b>RE-MIX VINTAGE SHOES</div>
                            <div className="product-id-cart"><b>ID:</b>2345001045E</div>
                            <div className="product-color-cart"><b>COLOR:</b>
                            <div className="product-color-cart-a"></div></div>
                            <div className="product-size-cart"><b>SIZE:</b>37.5</div> 
                           </div> 
                    </div>

                        <div className="price-cart-detail">
                                
                             <div className="amount-container-cart-page">
                                 <div className="remove-button-cart">-</div>
                                 <div className="amount-cp">2</div>
                                 <div className="add-button-cart">+</div>
                             </div>

                             <div className="actual-price-cp">
                                $39.09
                             </div>

                        </div>

                     </div>

                    </div>

                    <div className="bottom-cart-summary">
                        <div className="summary-title-cart"><h1>ORDER SUMMARY</h1></div>
                        <div className="summary-item-cart">
                            <span className="summary-text">SUBTOTAL</span>
                            <div className="summary-price">$69.09</div>
                        </div>
                        <div className="summary-item-cart">
                            <div className="summary-text">ESTIMATED SHIPPING</div>
                            <div className="summary-price">$9.09</div>
                        </div>
                        <div className="summary-item-cart">
                            <div className="summary-text">DISCOUNT SHIPPING</div>
                            <div className="summary-price">-$9.09</div>
                        </div>
                        <div className="summary-item-cart">
                            <div className="summary-text" style={{fontSize:"24px",fontWeight:"500"}}>TOTAL</div>
                            <div className="summary-price" style={{fontSize:"24px",fontWeight:"500"}}>$69.09</div>
                        </div>

                        <button className="checkout">CHECKOUT NOW</button>
                    </div>

                </div>
             </div>
            
        <Footer />
        </div>
    )
}