import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export function Footer(){
    return (

        <div className="footer-container">
               
               <div className="left-footer">
                  <div className="logo-footer">
                    <h1>SHOPIFY.</h1>
                  </div>

                  <div className="desc-footer">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus magni itaque rem aliquam dolor? Iure facilis eaque ipsa soluta maxime praesentium aliquid incidunt ipsum laborum culpa, in, dicta error earum.
                    </p>
                  </div>
                   
                 <div className="socials-footer-container">

                   <div className="social-icons-footer">
                      <FacebookOutlinedIcon />
                   </div>

                   <div className="social-icons-footer">
                      <InstagramIcon />
                   </div>

                   <div className="social-icons-footer">
                      <XIcon />
                   </div>

                   </div>
               </div>

               <div className="center-footer">
                   
                   <div className="title-list"><h1>
                    Useful Links
                   </h1></div>

                   <div className="list-footer">
                   <ul className='list-item'>
                   <li>Home</li>
                   <li>Cart</li>
                   <li>Man Fashion</li>
                   <li>Women Fashion</li>
                   <li>Accessories</li>
                   <li>My Account</li>
                   <li>Order Tracking</li>
                   <li>Wishlist</li>
                   <li>Terms & Conditions</li></ul>
                   </div>

               </div>

               <div className="right-footer">
                
                <div className="title-right"> 
                <h1>Contact</h1>
                </div> 

                
              <div className="contact-item">
               <MapIcon />
               122001,ABC Mew Zealand Roman
               </div>

               <div className="contact-item">
               <PhoneIcon />
               +199 234 567 890
               </div>

               <div className="contact-item">
               <MailOutlineIcon/>
                contact@shopify.com
               </div>
  
               </div>

        </div>
    )
}