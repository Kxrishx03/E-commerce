import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Product({item}){
    const [favouriteItems,setFavItems] = useState([{}]);
    const addFavorite = () =>{
          setFavItems(item);
    }
    return (
        <div className="product-item-container">
            <div className="circle-product">

            </div>

            <img src={item.image} alt="image" className="img-product-item" />
                
                
            <div className="info-product-item">
            <div className="icon-product">
            <Link to={`/cart`}  style={{textDecoration:"none",color:"inherit"}}>
            <ShoppingCartIcon />
            </Link>
            </div>

                <div className="icon-product">
                 <Link to={`/product/${item._id}`}  style={{textDecoration:"none",color:"inherit"}} >
                 <SearchIcon />
                 </Link>
                </div>

                <div className="icon-product">
                 <FavoriteBorderIcon onClick={addFavorite} />
                </div>
            </div>
            
        </div>
    )
}