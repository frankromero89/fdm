import React, { Component } from 'react';
import MenuCont from '../components/menu_masaryk';

import Ensaladas from '../assets/images/ensalada_menu.png'
import Entradas from '../assets/images/entradas_menu.png'
import Especiales from '../assets/images/especiales_menu.png'
import Hamburguesas from '../assets/images/hamburguesas_menu.png'
import Pastas from '../assets/images/pastas_menu.png'
import Postres from '../assets/images/postres_menu.png'
import Sopas from '../assets/images/sopas_menu.png'

class Food extends Component {
  constructor(props){
    super(props)
    this.state = {
      place: 'masaryk',
      showMenu: false,
      showTooglePlace:true,
      platillo:null

    }
  }

  toogleMenu = (platillo) => {
    this.setState({
      platillo,
      showMenu: !this.state.showMenu
    })
  }

  selectPlace = (place) => {
    this.setState({
      place,
      showTooglePlace:false
    })
  }

  render() {
    return (
      <div id='menuA' className='containerFood allView'>
        <div className='item itemBeer'>
          {/*<div className='maskContainerFood bg_brownD'
            onClick={this.toogleMenu}>
          </div>
          */}
        </div>
        <div className='item itemMenu' >
        </div>

        <div className='item itemHamburguer' onClick={()=>this.toogleMenu('hamburguesa')}>
            <img src={Hamburguesas} />
            <div className='maskContainerFood bg_brownD'>
                <h1>Hamburguesas</h1>
            </div>
        </div>
        <div className='item itemchicken' onClick={()=>this.toogleMenu('especiales')}>
            <img src={Especiales} />
          <div className='maskContainerFood bg_brownD'>
            <h1>Especiales</h1>
          </div>
        </div>
        <div className='item itemSalad' onClick={()=>this.toogleMenu('ensaladas')}>
            <img src={Ensaladas} />
            <div className='maskContainerFood bg_brownD'>
                <h1>Ensaladas</h1>
            </div>
        </div>
        <div className='item itemPasta' onClick={()=>this.toogleMenu('pastas')}>
            <img src={Pastas} />
            <div className='maskContainerFood bg_brownD'>
                <h1>Pastas</h1>
            </div>
        </div>
        <div className='item itemPostres' onClick={()=>this.toogleMenu('postres')}>
            <img src={Postres} />
          <div className='maskContainerFood bg_brownD'>
            <h1>Postres</h1>
          </div>
        </div>
        <div className='item itemCoffe' onClick={()=>this.toogleMenu('sopas')}>
            <img src={Sopas} />
          <div className='maskContainerFood bg_brownD'>
            <h1>Sopas</h1>
          </div>
        </div>
        <div className='item itemTaco' onClick={()=>this.toogleMenu('entradas')}>
            <img src={Entradas} />
          <div className='maskContainerFood bg_brownD'>
            <h1>Entradas</h1>
          </div>
        </div>

        <MenuCont
          active={this.state.showMenu}
          hiddenMenu={() => this.setState({showMenu:false})}
          platillo={this.state.platillo}
          place={this.state.place}
        />

      </div>
    );
  }
}

export default Food;
