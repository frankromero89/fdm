import React from 'react';

let branches;
export default branches = (props) => {
  return (
    <div className='contentBranches'>
      <div className='imgBranches'>
      </div>
      <div className='infoBranches'>
        <h1 className='titleSection'>Sucursales</h1>
        <div className='branch'>
          <h1 className='nameBranch'>Masaryk</h1>
          <p>Av. Presidente Masaryk #48, Polanco</p> 
          <p>Tel. 55 3168 26</p>
          <button className='bg_gold'>RESERVA</button>
        </div>
        <div className='branch'>
          <h1>Lerma</h1>
          <p>Rio Lerma 156, Cuauhtémoc, CDMX</p> 
          <p>Tel. 52 0704 91</p>
          <button className='bg_gold'>RESERVA</button>
        </div>
      </div>
    </div>
  );
};