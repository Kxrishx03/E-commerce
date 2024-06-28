import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { sliderItems } from '../Data';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";
export function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }
    };

    return (
        <div className="slider-container">

            <div className="slider-arrow-left" onClick={() => handleClick("left")}  >
                <IconButton>
                    <ArrowBackIcon />
                </IconButton>
            </div>

            <div className="slider-wrapper" >
                {sliderItems.map((item, index) => (
                    <div className="slide" key={index} 
                     style={{ transform: `translateX(${slideIndex *-100}vw)`,backgroundColor: item.bg }}
                    >
                        <div className="image-container-slider">
                            <div className='img-girl'>
                                <img src={item.img} alt="IMAGE" />
                            </div>
                        </div>
                        <div className="info-container-slide">
                            <div className="title-slider">
                                <h1>{item.title}</h1>
                            </div>
                            <div className="desc-slider">
                                <p>{item.desc}</p>
                            </div>
                           
                            <div className='btn-slider'>
                            <Link  to={"/products"}>
                                <button style={{padding:"10px",
                                 fontSize:"20px",
                                 backgroundColor:"transparent",
                                 cursor:"pointer"}}>SHOP NOW</button>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>

            <div className="slider-arrow-right" >
                <IconButton>
                    <ArrowForwardIcon
                    onClick={() => handleClick("right")} />
                </IconButton>
            </div>
        </div>
    );
}
