import React from 'react';

let food;
export default food = (props) => {
  return (
    <div className='contentFood'>
        <div className='maskFoodContent bg_gold'></div>
        <div className='selectFood'>
          <div className='titles'>
            <h1 className='titleSection white'>menú de alimentos</h1>
            <h3 className='subtitle'>Todos los platillos tienen una opción <br/>
            de madiraje para maridar tu platillo.</h3>
          </div>
          <div className='buttons'>
            <button className='buttonFood white'>Lerma</button>
            <button className='buttonFood white'>Masaryk</button>
          </div>
        </div>
    </div>
  );
};