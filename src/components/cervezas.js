import React from 'react';
import LogoBeer from '../assets/images/logoBeers.png'
import ImgDivide from '../assets/images/trigo.png'

let cervezas;
export default cervezas = (props) => {
  return (
    <div className='contentBeers'>
      <img className='imgLogo' src={LogoBeer}/>
      <img className='imgDivide' src={ImgDivide}/>
    </div>
  );
};