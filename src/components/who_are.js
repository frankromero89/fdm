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

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
       dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
       book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <br />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
       dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
       book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  );
};
