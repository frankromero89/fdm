import React from 'react'
import FeatherIcon from 'feather-icons-react';

import Hamburguesa from '../assets/images/menus/hamburguesa_img.jpg'
import HamburguesaMenu from '../assets/images/menus/hamburguesa_menu.jpg'

export default function MenuMasaryk(props) {
  let imageFood = Hamburguesa;
  let imageMenu = HamburguesaMenu;
  switch (props.platillo) {
    case 'hamburguesa':
      imageFood = Hamburguesa;
      imageMenu = HamburguesaMenu;
      break;
    default:

  }
  return(
    <div className={`containerMenu ${props.active&& 'active'}`}>
      <div
        style={{backgroundImage:`url(${Hamburguesa})`,}}
        className={`imgMenu ${props.active&& 'active'}`}>
      </div>
      <div
        style={{backgroundImage:`url(${imageMenu})`}}
        className={`menu ${props.active&& 'active'}`}>
          <FeatherIcon
            icon="x-circle"
            size='30'
            onClick={props.hiddenMenu}
          />
      </div>
    </div>
  )
}
