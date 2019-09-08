import React from 'react';

let boobles;
export default boobles = (props) => {
  return (
    <div className='contentBoobles'>
      <div className='titleBoobles'>
        <div className='maskTitleBoo bg_black'></div>
        <h1 className='titleSection white'>Como funciona el <br/> sistema de puntos</h1>
      </div>
      <div className='containerAnimBoobles'>
        <div className='booble'>
          <div className='contentBooble'>
              <p>Content Booble</p>
          </div>
        </div>
        <div className='simpleBooble'/>
      </div>
    </div>
  );
};
