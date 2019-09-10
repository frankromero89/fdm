import React from 'react';

import TitleAnimate from './titleAnimate'

let gallery;
export default gallery = (props) => {
  return (
    <div className='contentGallery'>
      <TitleAnimate text={<h1 className='titleSection'>Galería</h1>} />      
    </div>
  );
};
