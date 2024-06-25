
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function Navbar(){
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
                  <h1>
                  SHOPIFY.
                  </h1>
                 </div>
                </div>

                <div className="right-nav">
                 <div className="menu-nav">
                    REGISTER
                 </div>

                 <div className="menu-nav">
                    SIGNIN
                 </div>

                 <div className="menu-nav">
                 <Badge badgeContent={4} color="primary">
                 <ShoppingCartIcon />
                  </Badge>
                 </div>

                </div>

            </div> 
        </div>
    )
}