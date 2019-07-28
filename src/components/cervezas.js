import React from 'react';
import LogoBeer from '../assets/images/logoBeers.png'
import ImgDivide from '../assets/images/trigo.png'
import Slider from 'react-slick'

import { moveSlider } from '../assets/js/slider'


let cervezas;
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
}
export default cervezas = (props) => {
  return (
    <div className='contentBeers'>
      <div {...settings} className='sliderBeers'>
        <div className='slideBeer' dataB='0'>
          <div className='descriptionBeer'>
            <h1>Beer 1</h1>
          </div>
          <div className='imageBeer'>
            <img className='beer' src='https://fiebre.s3.us-east-2.amazonaws.com/fiebre/pinta.png' />
          </div>
        </div>
        <div className='slideBeer' dataB='1'>
          <div className='descriptionBeer'>
            <h1>Beer 2</h1>
          </div>
          <div className='imageBeer'>
            <img className='beer' src='https://fiebre.s3.us-east-2.amazonaws.com/fiebre/tarro.png' />
          </div>
        </div>
        <div className='slideBeer' dataB='2'>
          <div className='descriptionBeer'>
            <h1>
              Beer3
            </h1>
          </div>
          <div className='imageBeer'>
            <img className='beer copa' src='https://fiebre.s3.us-east-2.amazonaws.com/fiebre/copa+vite.png' />
          </div>
        </div>
        <div className='slideBeer' dataB='3'>
          <div className='descriptionBeer'>
            <h1>
              Beer4
            </h1>
          </div>
          <div className='imageBeer'>
            <img className='beer' src='https://fiebre.s3.us-east-2.amazonaws.com/fiebre/stout.png' />
          </div>
        </div>
      </div>
      <div className='buttonsSlide'>
        <button onClick={()=>moveSlider('left')}>left</button>
        <button onClick={()=>moveSlider('right') }>right</button>
      </div>
      {/* <img className='imgLogo' src={LogoBeer}/> */}
      <img className='imgDivide' src={ImgDivide}/>
    </div>
  );
};