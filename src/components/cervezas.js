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
      const $description = document.getElementById('descriptionBeer')
      const $titleDescription = document.getElementById('titleDescription')
      switch (nameImg) {
        case 'pinta':
          if(isActive){
            console.log($description)
            bottles[i].setAttribute('src',pintaActive)
            $titleDescription.innerHTML = 'flauta'
            $description.innerHTML = 'El vaso es estrecho en la parte inferior y ligeramente más ancho en la parte superior, debido a su forma alargada, atrapa fácilmente el aroma y es visualmente muy agradable. <br /> <span>Tipo de cerveza: </span> Weizen, Witbier, German Pilsner, Pale Lager, entre otros... '
          }else bottles[i].setAttribute('src',pinta);
          break;
        case 'tarro':
          if(isActive){
            bottles[i].setAttribute('src',tarroActive);
            $titleDescription.innerHTML = 'tarro'
            $description.innerHTML = 'Son robustos, de vidrio grueso y lisos o de gran capacidad y con un asa que impide que el calor de la mano caliente la cerveza. Están pensadas para poder chocarlas a la hora de brindar. <br /> <span>Tipo de cerveza: </span> Drunke, Bock, Vienna, entre otros... '
          }
          else bottles[i].setAttribute('src',tarro);
          break;
        case 'copa':
          if(isActive){
            bottles[i].setAttribute('src',copaActive);
            $titleDescription.innerHTML = 'copa'
            $description.innerHTML = 'La parte superior se estrecha hacia adentro para potenciar y capturar los aromas. El vaso destaca la espuma de las cevezas con cuerpo y fuerte, con más de 8% de alcohol. <br /> <span>Tipo de cerveza: </span> Belgian Strong Ale, Dubbel, Tripel, Lambrica, entre otros...'
          }
          else bottles[i].setAttribute('src',copa);
          break;
        case 'stout':
          if(isActive){
            bottles[i].setAttribute('src',stoutActive);
            $titleDescription.innerHTML = 'pinta'
            $description.innerHTML = 'Este tipo de vaso es uno de los vasos más utilizados en los pubs ingleses. Su forma de cono invertido con un ensanchamiento cerca del borde permite la formación de una espuma cremosa. <br /> <span>Tipo de cerveza: </span> Red Ale, Porter, IPA, Stout, entre otros...'
          }
          else bottles[i].setAttribute('src',stout);
          break;
        default:
          break;
      }

    }
  }

  const clickImg = async (e) => {
     const imgBeer = e.target;
     const parentImg = imgBeer.closest('.slideBeer');
     const numPosition = parentImg.getAttribute('dataB')
     console.log(numPosition);
     switch (numPosition) {
         case '1':
            await moveSlider('left');
            typeImg()
            break;
        case '2':
            if(window.innerWidth > 601){
                await moveSlider('left');
                await moveSlider('left');
                typeImg()
            }
            break;
        case '3':
            if(window.innerWidth > 601){
                await moveSlider('right');
                typeImg()
            }
            break;
         default:
     }
  }


  return (
    <div className='contentBeers'>
      <div className='descriptionBeerContainer'>
        <span className='first'></span>
        <h1 className='titleDescriptionBeer' id='titleDescription'>flauta</h1>
        <p className='descriptionBeer' id='descriptionBeer'>
          El vaso es estrecho en la parte inferior y ligeramente más ancho en la parte superior, debido a su forma alargada, atrapa fácilmente el aroma y es visualmente muy agradable. <br /> <span>Tipo de cerveza: </span> Weizen, Witbier, German Pilsner, Pale Lager, entre otros...
        </p>
        <span className='last'></span>
      </div>
      {/*}<button className='moveSlider' onClick={async()=>{ await moveSlider('left'); typeImg() }}>
        <FeatherIcon icon="chevron-left" size='30'/>
      </button>*/}
      <div className='sliderBeers'>
        <div className='slideBeer' dataB='0'>
          <div className='imageBeer'>
            <img onClick={clickImg} className='beer active' dataImg='pinta' src={pintaActive} />
          </div>
        </div>
        <div className='slideBeer tarro' dataB='1'>
          <div className='imageBeer'>
            <img onClick={clickImg} className='beer' dataImg='tarro' src={tarro} />
          </div>
        </div>
        <div className='slideBeer' dataB='2'>
          <div className='imageBeer'>
            <img onClick={clickImg} className='beer copa' dataImg='copa' src={copa} />
          </div>
        </div>
        <div className='slideBeer' dataB='3'>
          <div className='imageBeer'>
            <img onClick={clickImg} className='beer' dataImg='stout' src={stout} />
          </div>
        </div>
      </div>
      {/*}<button className='moveSlider' onClick={async()=>{ await moveSlider('right'); typeImg() }}>
        <FeatherIcon icon="chevron-right" size='30' />
      </button>*/}
      <img className='imgLogo' src={LogoBeer}/>
    </div>
  );
};
