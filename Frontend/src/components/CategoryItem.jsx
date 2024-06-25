export function CategoryItem({item}){
       return(
        <div className="catitem-container">
            
            <img className="img-category" src={item.img} alt="image" />

           
               
            <div className="info-category">
                <div className="title-info-category">
                <h1> {item.title}</h1>
                </div>

                <div className="btn-category">
                    <button>SHOP NOW</button>
                </div>
            </div>

        </div>
       )
}

