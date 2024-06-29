import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux';

export function Navbar(){
    
    const user = useSelector((state) => state.user.currentUser); 
    console.log(user);
    const quantity = useSelector(state=>state.cart.quantity);
    

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
   
    return (
        <div className="Navbar_container">

            <div className="nav-wrapper">

                <div className="left-nav">

                    <span className="laguage-nav">
                     EN
                    </span>
                    <div className="search-container-nav">
                    <div className="input-nav">
                        <input type="text" />
                    </div>
                     <SearchIcon style={{color:"gray",fontSize:"16px"}} />
                    </div>
                </div>

                <div className="center-nav">
                 <div className="logo-nav">
                  <Link style={{textDecoration:"none",color:"black",textAlign:"center"}} to={'/'} >
                  <h1>
                  SHOPIFY.
                  </h1>
                  </Link>
                 </div>
                </div>

                <div className="right-nav">
                 <div className="menu-nav">
                 <Link style={{textDecoration:"none",color:"black"}} to={"/register"}>
                    REGISTER
                </Link>
                 </div>

            
                {user ? <div className="menu-nav" onClick={handleClick}>LOGOUT </div>:<div className="menu-nav"> <Link style={{textDecoration:"none",color:"black"}} to={"/login"}>SIGNIN </Link></div>}
                 

                 <div className="menu-nav">
                 <Badge badgeContent={user?quantity:0} color="primary">
                 <Link style={{color:"black"}} to={"/cart"}>
                 <ShoppingCartIcon />
                 </Link>
                  </Badge>
                 </div>

                </div>

            </div> 
        </div>
    )
}