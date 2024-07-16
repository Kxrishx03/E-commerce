import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import {userRequest} from "../requestMethods";
import {useNavigate} from "react-router-dom";

const KEY = import.meta.env.VITE_STRIPE_KEY; 


export function Cart(){
    const user = useSelector((state) => state.user.currentUser); 
    const cart = useSelector(state=>state.cart);
    const [stripeToken,setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) =>{
        setStripeToken(token);
    }
    
    useEffect(()=>{
        const makeRequest = async () =>{
            try{
                const res  = await userRequest.post("/checkout/payment",{
                    tokenId : stripeToken.id,
                    amount: cart.total*100
                });
                navigate("/success", {
                    state: { stripeData: res.data, products: cart },
                  });
            } catch(err) {
                console.log(err);
            }
        }
       stripeToken && makeRequest();
    }
   
    ,[stripeToken,cart.total,navigate]);

    
    return (
        <div className="cart-container">
        <Navbar />
        <Announcement />
             
             <div className="cart-wrapper">
                <h1 className="cart-title">
                    YOUR BAG
                </h1>

                <div className="top-cart">
                   <Link to={"/products"}>
                   <button className="top-cart-btn-a">CONTINUE SHOPPING</button>
                   </Link>
                    <div className="top-cart-texts">
                     <span className="top-cart-text">
                       Shopping Bag({cart.quantity})
                     </span>
                     <span className="top-cart-text">
                       Your wishlist(0)
                     </span>
               </div>
               <StripeCheckout
                          name="SHOPIFY." 
                          billingAddress
                          shippingAddress
                          description={`YOUR TOTAL IS ₹${cart.total}`} 
                          image="https://img.icons8.com/?size=100&id=tLuf6TL8RS4h&format=png&color=000000"
                          amount={cart.total*100}
                          currency="INR"
                          token={onToken}
                          stripeKey={KEY} > 
                
                    <button className="top-cart-btn-b">CHECKOUT NOW</button>
                    </StripeCheckout>
                </div>

                <div className="bottom-cart">
                    <div className="bottom-cart-info">
                       { user && cart.products.map(p=>(
                     <div className="product-cart">
                        <div className="info-product-detail-cart">
                            <img src={p.image} alt="" className="cart-image" />
                            <div className="detail-cart">
                            <div className="product-name-cart" style={{textTransform:"uppercase"}}><b>PRODUCT:</b>{p.title}</div>
                            <div className="product-id-cart"><b>ID:</b>{p._id}</div>
                            <div className="product-color-cart"><b>COLOR:</b>
                            <div className="product-color-cart-a" style={{backgroundColor:p.color}}></div></div>
                            <div className="product-size-cart"><b>SIZE:</b>{p.size}</div> 
                           </div> 
                    </div>

                        <div className="price-cart-detail">
                                
                             <div className="amount-container-cart-page">
                                 <div className="remove-button-cart">-</div>
                                 <div className="amount-cp">{p.quantity}</div>
                                 <div className="add-button-cart">+</div>
                             </div>

                             <div className="actual-price-cp">
                             ₹{p.price}
                             </div>

                        </div>

                     </div>
                     
                       ))}

                      
                    </div>

                    <div className="bottom-cart-summary">
                        <div className="summary-title-cart"><h1>ORDER SUMMARY</h1></div>
                        <div className="summary-item-cart">
                            <span className="summary-text">SUBTOTAL</span>
                            <div className="summary-price">₹{cart.total}</div>
                        </div>
                        <div className="summary-item-cart">
                            <div className="summary-text">ESTIMATED SHIPPING</div>
                            <div className="summary-price"><div className="summary-price">₹{cart.total}</div></div>
                        </div>
                        <div className="summary-item-cart">
                            <div className="summary-text">DISCOUNT SHIPPING</div>
                            <div className="summary-price">-₹0</div>
                        </div>
                        <div className="summary-item-cart">
                            <div className="summary-text" style={{fontSize:"24px",fontWeight:"500"}}>TOTAL</div>
                            <div className="summary-price" style={{fontSize:"24px",fontWeight:"500"}}><div className="summary-price">₹{cart.total}</div>
                        </div>
                        </div>
                        <StripeCheckout
                          name="SHOPIFY." 
                          billingAddress
                          shippingAddress
                          description={`YOUR TOTAL IS ₹${cart.total}`} 
                          image="https://img.icons8.com/?size=100&id=tLuf6TL8RS4h&format=png&color=000000"
                          amount={cart.total*100}
                          currency="INR"
                          token={onToken}
                          stripeKey={KEY} >
                        <button className="checkout">CHECKOUT NOW</button>
                        </StripeCheckout>
                    </div>

                </div>
             </div>
            
        <Footer />
        </div>
    )
}