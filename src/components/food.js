import React from 'react';

import TitleAnimate from './titleAnimate'

let food;
export default food = (props) => {
  return (
    <div className='dimmerMenu'>
      <div className='contentFood'>
          <div className='maskFoodContent bg_gold'></div>
          <div className='selectFood'>
            <div className='titles'>
              <TitleAnimate
                text={<h1 className='titleSection white'>menú de alimentos</h1>}
                color='white' />
              <h3 className='subtitle'>Todos los platillos tienen una opción <br/>
              de madiraje para maridar tu platillo.</h3>
            </div>
            <div className='buttons'>
              <button
                className='buttonFood white'
                onClick={()=>props.selectPlace('lerma')}
              >
                Lerma
              </button>
              <button
                className='buttonFood white'
                onClick={()=>props.selectPlace('masaryk')}
              >
                Masaryk
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};
