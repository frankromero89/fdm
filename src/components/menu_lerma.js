import React from 'react'
import FeatherIcon from 'feather-icons-react';

import Fondo from '../assets/images/menus/fondo.png'
import HamburguesaLm from '../assets/images/menus/hamburguesa_img_lm.png'
import HamburguesaMenuLm from '../assets/images/menus/hamburguesa_menu_lm.png'
import EnsaladasLm from '../assets/images/menus/ensaladas_img_lm.png'
import EnsaladaMenuLm from '../assets/images/menus/ensaladas_menu_lm.png'
import EntradaLm from '../assets/images/menus/entradas_img_lm.png'
import EntradaMenuLm from '../assets/images/menus/entradas_menu_lm.png'
import EspecialesLm from '../assets/images/menus/especiales_img_lm.png'
import EspecialesMenuLm from '../assets/images/menus/especiales_menu_lm.png'
import PastaLm from '../assets/images/menus/pastas_img_lm.png'
import PastaMenuLm from '../assets/images/menus/pastas_menu_lm.png'
import PostreLm from '../assets/images/menus/postres_img_lm.png'
import PostreMenuLm from '../assets/images/menus/postres_menu_lm.png'
import SopaLm from '../assets/images/menus/sopas_img_lm.png'
import SopaMenuLm from '../assets/images/menus/sopas_menu_lm.png'

export default function MenuMasaryk(props) {

  let imageFood = HamburguesaLm;
  let imageMenu = HamburguesaMenuLm;

    switch (props.platillo) {
        case 'hamburguesa':
                imageFood = HamburguesaLm;
                imageMenu = HamburguesaMenuLm;
            break;
        case 'ensaladas':
                imageFood = EnsaladasLm;
                imageMenu = EnsaladaMenuLm;
            break;
        case 'entradas':
                imageFood = EntradaLm;
                imageMenu = EntradaMenuLm;
            break;
        case 'especiales':
                imageFood = EspecialesLm;
                imageMenu = EspecialesMenuLm;
            break;
        case 'pastas':
                imageFood = PastaLm;
                imageMenu = PastaMenuLm;
            break;
        case 'postres':
                imageFood = PostreLm;
                imageMenu = PostreMenuLm;
            break;
        case 'sopas':
                imageFood = SopaLm;
                imageMenu = SopaMenuLm;
          break;
    default:

  }
  return(
    <div className={`containerMenu ${props.active&& 'active'}`}>
      <div
        style={{backgroundImage:`url(${imageFood})`,}}
        className={`imgMenu ${props.active&& 'active'}`}>
      </div>
      <div
        style={{backgroundImage:`url(${Fondo})`}}
        className={`menu ${props.active&& 'active'}`}>
        <img src={imageMenu} />
          <FeatherIcon
            icon="x-circle"
            size='30'
            onClick={props.hiddenMenu}
          />
      </div>
    </div>
  )
}
