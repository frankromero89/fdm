import React from 'react';
import FeatherIcon from 'feather-icons-react';
import LogoBeer from '../assets/images/logoBeers.png'

import pinta from '../assets/images/slider/pinta.png'
import pintaActive from '../assets/images/slider/pinta_active.png'
import tarro from '../assets/images/slider/tarro.png'
import tarroActive from '../assets/images/slider/tarro_active.png'
import copa from '../assets/images/slider/copa.png'
import copaActive from '../assets/images/slider/copa_active.png'
import stout from '../assets/images/slider/stout.png'
import stoutActive from '../assets/images/slider/stout_active.png'

import { moveSlider } from '../assets/js/slider'

let cervezas;

export default cervezas = (props) => {

  const typeImg = () => {
    const bottles = document.querySelectorAll('.beer');
    for(let i = 0; i < bottles.length; i ++ ){
      const isActive = bottles[i].classList.contains('active');
      const nameImg = bottles[i].getAttribute('dataImg');
      switch (nameImg) {
        case 'pinta':
          if(isActive) bottles[i].setAttribute('src',pintaActive);
          else bottles[i].setAttribute('src',pinta);
          break;
        case 'tarro':
          if(isActive) bottles[i].setAttribute('src',tarroActive);
          else bottles[i].setAttribute('src',tarro);
          break;
        case 'copa':
          if(isActive) bottles[i].setAttribute('src',copaActive);
          else bottles[i].setAttribute('src',copa);
          break;
        case 'stout':
          if(isActive) bottles[i].setAttribute('src',stoutActive);
          else bottles[i].setAttribute('src',stout);
          break;
        default:
          break;
      }

    }
  }

  return (
    <div className='contentBeers'>
      <div className='descriptionBeerContainer'>
        <h1 className='titleDescriptionBeer'>Title Beer</h1>
        <p className='descriptionBeer'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
        </p>
      </div>
      <button className='moveSlider' onClick={async()=>{ await moveSlider('left'); typeImg() }}>
        <FeatherIcon icon="chevron-left" size='30'/>
      </button>
      <div className='sliderBeers'>
        <div className='slideBeer' dataB='0'>
          <div className='imageBeer'>
            <img className='beer active' onClick={()=>typeImg('pinta')} dataImg='pinta' src={pintaActive} />
          </div>
        </div>
        <div className='slideBeer' dataB='1'>
          <div className='imageBeer'>
            <img className='beer' dataImg='tarro' src={tarro} />
          </div>
        </div>
        <div className='slideBeer' dataB='2'>
          <div className='imageBeer'>
            <img className='beer copa' dataImg='copa' src={copa} />
          </div>
        </div>
        <div className='slideBeer' dataB='3'>
          <div className='imageBeer'>
            <img className='beer' dataImg='stout' src={stout} />
          </div>
        </div>
      </div>
      <button className='moveSlider' onClick={async()=>{ await moveSlider('right'); typeImg() }}>
        <FeatherIcon icon="chevron-right" size='30' />
      </button>
      <img className='imgLogo' src={LogoBeer}/>
    </div>
  );
};
