import React from 'react';
import ImgDrinks from '../assets/images/bebidas.png'

let drinks;
export default drinks = (props) => {
  return (
    <div className='contentDrinks'>
      <img className='imgDrinks' src={ImgDrinks}/>
      <h1 className='titleSection'>bebidas</h1>
    </div>
  );
};