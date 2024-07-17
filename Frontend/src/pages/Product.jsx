import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {publicRequest} from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

export function Product(){
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [color,setColor] = useState(null);
    const [size,setSize] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
       const getProduct = async () =>{
          try{
             
            const res = await publicRequest.get(`products/find/${id}`);
            console.log(res.data);
            setProduct(res.data.product);

          } catch(err){
            console.log(err);
            setProduct({});
          }
       }

       getProduct();
    },[id])
    
    const handleClick = () =>{
       dispatch(
        addProduct({...product,quantity,color,size})
       );
    }
    return (
        <div className="product-container-page">
           <Navbar />
           <Announcement />
           
           <div className="wrapper-product-page">

               <div className="product-page-image-conatiner">
                   <img src={product.image} alt="image" />
               </div>

               <div className="product-page-info-container">
                    
                    <div className="product-page-info-title">
                     <h1 style={{textTransform:"uppercase",fontWeight:"500"}}>{product.title} </h1>
                    </div>

                    <div className="product-page-desc">
                       <p>
                        {product.description}
                       </p>
                    </div>

                    <div className="price-pp">
                       ₹ {product.price}
                    </div>

                    <div className="product-page-filter-container">
                     <div className="filter-product-page">
                      <div className="filter-text-product-page">Color </div>
                      { product.color &&  product.color.map((c) => (
                        <div onClick={()=>setColor(c)}  style={{ width: "20px", height: "20px", backgroundColor: c 
                        , borderRadius:"50%", marginRight:"10px",marginLeft:"5px",border:"1px solid lightgray", cursor:"pointer"}}></div> ))}
                     </div> 
                       
                      <div className="filter-product-page">
                      <div className="filter-text-product-page">Size</div> 
                      <select onChange={(e) => setSize(e.target.value)}  id="sizes" name="sizes" className="select-filter-page">
                     {product.size && product.size.map((s, index) => (
                                    <option key={index} value={s}>{s}</option>
                     ))}
                      </select>
                      </div>

                    </div>

                    <div className="add-product-page-container">
                         
                         <div className="amount-container-product-page">
                             
                             <div className="remove-button" style={{cursor:"pointer",fontSize:"20px"}} onClick={()=> setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</div>
                             
                             <div className="amount-pp" >{quantity}</div>
                             <div className="add-button" onClick={()=>setQuantity(quantity+ 1)}style={{cursor:"pointer",fontSize:"20px"}} >+</div>

                         </div>

                         <div className="add-to-cart-btn-pp" onClick={handleClick}><button>ADD TO CART</button></div>

                    </div>

               </div>

           </div>

           <Newsletter />
           <Footer />
        </div>
    )
}