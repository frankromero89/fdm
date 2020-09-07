import React from 'react'
import FeatherIcon from 'feather-icons-react';

import Fondo from '../assets/images/menus/fondo.png'
import HamburguesaMk from '../assets/images/menus/hamburguesa_img_mk.png'
import HamburguesaMenuMk from '../assets/images/menus/hamburguesa_menu_mk.png'
import EnsaladasMk from '../assets/images/menus/ensaladas_img_mk.png'
import EnsaladaMenuMk from '../assets/images/menus/ensaladas_menu_mk.png'
import EntradaMk from '../assets/images/menus/entradas_img_mk.png'
import EntradaMenuMk from '../assets/images/menus/entradas_menu_mk.png'
import EspecialesMk from '../assets/images/menus/especiales_img_mk.png'
import EspecialesMenuMk from '../assets/images/menus/especiales_menu_mk.png'
import PastaMk from '../assets/images/menus/pastas_img_mk.png'
import PastaMenuMk from '../assets/images/menus/pastas_menu_mk.png'
import PostreMk from '../assets/images/menus/postres_img_mk.png'
import PostreMenuMk from '../assets/images/menus/postres_menu_mk.png'
import SopaMk from '../assets/images/menus/sopas_img_mk.png'
import SopaMenuMk from '../assets/images/menus/sopas_menu_mk.png'

import TitleAnimate from './titleAnimate'

export default function MenuMasaryk(props) {

  let imageFood = HamburguesaMk;
  let imageMenu = HamburguesaMenuMk;
  let title = 'Hamburguesas';

    switch (props.platillo) {
        case 'hamburguesa':
                imageFood = HamburguesaMk;
                imageMenu = HamburguesaMenuMk;
                title = 'Hamburguesas'
            break;
        case 'ensaladas':
                imageFood = EnsaladasMk;
                imageMenu = EnsaladaMenuMk;
                title = 'Ensaladas'
            break;
        case 'entradas':
                imageFood = EntradaMk;
                imageMenu = EntradaMenuMk;
                title = 'Entradas'
            break;
        case 'especiales':
                imageFood = EspecialesMk;
                imageMenu = EspecialesMenuMk;
                title = 'Especiales'
            break;
        case 'pastas':
                imageFood = PastaMk;
                imageMenu = PastaMenuMk;
                title = 'Pastas'
            break;
        case 'postres':
                imageFood = PostreMk;
                imageMenu = PostreMenuMk;
                title = 'Postres'
            break;
        case 'sopas':
                imageFood = SopaMk;
                imageMenu = SopaMenuMk;
                title = 'Sopas'
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
        <TitleAnimate text={<h1 className='titleSection'>{title}</h1> } />
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
