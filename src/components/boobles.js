import React from 'react';
import TitleAnimate from './titleAnimate'

let boobles;

let bobbleArray = [1,2,3,4,5,6]

export default boobles = (props) => {

  const renderMiniBoobles = () =>{

  }

  return (
    <div className='contentBoobles'>
      <div className='titleBoobles'>
        <div className='maskTitleBoo bg_black'></div>
        <TitleAnimate
          text={<h1 className='titleSection white'>Como funciona el <br/> sistema de puntos</h1>}
          color='white'/>
      </div>
      <div className='containerAnimBoobles'>
        <div className='booble'>
          <div className='contentBooble'>
              <p>Content Booble</p>
          </div>
        </div>
      </div>
      <div className='boobleMoving'>
        {bobbleArray.map((boobl,i) => {
            return(
              <div key={i} className='simpleBooble'/>
            )
          })
        }
      </div>
    </div>
  );
};
