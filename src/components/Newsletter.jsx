import SendIcon from '@mui/icons-material/Send';

export function Newsletter(){
    return (
        <div className="newsletter-container">
             <div className="news-title">
               <h1> Newsletter</h1>
             </div>

             <div className="desc-news">
                Get timely updates from your favorite products.
             </div>

             <div className="input-news-container">
                   <div className="input-news">
                    <input type="text" placeholder='Enter your email' />
                   </div>

                   <div className="button-news">
                    <button><SendIcon /></button>
                  </div>

             </div>
        </div>
    )
}