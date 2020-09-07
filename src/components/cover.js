import React from 'react';
import Slider from "react-slick";
import Video from '../assets/videos/intro.mp4';

let cover;
export default cover = (props) => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='coverContent'>
            <iframe className='videoFdm' src={Video} frameborder="0" allowfullscreen></iframe>
        </div>
    );
};
