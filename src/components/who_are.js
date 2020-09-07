import React from 'react';
import TitleAnimate from './titleAnimate'

let who_are
export default who_are = (props) => {
  return (
    <div className='contentWho'>
      <div className='titleSection'>
        <TitleAnimate text={<h1 className='titleSection'>¿Quiénes somos?</h1> } />
        <h3 className='subtitle'>Pasión por la cerveza Artesanal</h3>
      </div>

      <p>Fiebre de Malta es la casa de la Cerveza Artesanal en México, donde podrás disfrutar la más amplia variedad de Cervezas de
          Barril con la mejor calidad del mercado, complementada por una cuidadosa selección de cervezas embotelladas artesanales
          mexicanas y extranjeras, ofreciéndote una increíble experiencia en lo que es nuestra pasión: La Buena Cerveza.</p>
        <br />
        <p>Contamos con la más sofisticada instalación en México, donde podrás observar la cámara de refrigeración,
            las mezcladoras de Nitrógeno y CO2 y la impresionante torre con 24 salidas en Lerma y 36 salidas en Masaryk,
            que nos distingue de cualquier otro lugar.</p>
    </div>
  );
};
