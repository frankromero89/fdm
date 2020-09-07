import React from 'react';
import TitleAnimate from './titleAnimate'

let branches;
export default branches = (props) => {
  return (
    <div className='contentBranches'>
      <div className='imgBranches'>
      </div>
      <div className='maskBranches' />
      <div className='infoBranches'>
        <TitleAnimate text={<h1 className='titleSection white'>Sucursales</h1>} />
        <div className='branch'>
          <h1 className='nameBranch'>Masaryk</h1>
          <p>Av. Presidente Masaryk #48, Polanco</p>
          <p>Tel. 55 3168 26</p>
          <button onClick={() => props.redirectTheFork()} className='bg_gold'>RESERVA</button>
        </div>
        <div className='branch'>
          <h1>Lerma</h1>
          <p>Rio Lerma 156, Cuauhtémoc, CDMX</p>
          <p>Tel. 52 0704 91</p>
          <button onClick={() => props.redirectTheFork(true)} className='bg_gold'>RESERVA</button>
        </div>
      </div>
    </div>
  );
};
