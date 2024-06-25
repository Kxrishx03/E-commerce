import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function Product({item}){
    return (
        <div className="product-item-container">
            <div className="circle-product">

            </div>

            <img src={item.img} alt="image" className="img-product-item" />
                
                
            <div className="info-product-item">
            <div className="icon-product">
                 <ShoppingCartIcon />
                </div>

                <div className="icon-product">
                 <SearchIcon />
                </div>

                <div className="icon-product">
                 <FavoriteBorderIcon />
                </div>
            </div>
            
        </div>
    )
}