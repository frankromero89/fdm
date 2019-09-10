import React, { Component } from 'react';
import FoodCont from '../components/food';
import MenuCont from '../components/menu_masaryk';

class Food extends Component {
  constructor(props){
    super(props)
    this.state = {
      place: null,
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
      <div className='containerFood allView'>
        <div className='item itemBeer'>
          {/*<div className='maskContainerFood bg_brownD'
            onClick={this.toogleMenu}>
          </div>
          */}
        </div>
        <div className='item itemMenu' >
        </div>

        <div className='item itemHamburguer' onClick={()=>this.toogleMenu('hamburguesa')}>
          <div className='maskContainerFood bg_brownD'>
            <h1>Hamburguesas</h1>
          </div>
        </div>
        <div className='item itemchicken' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
            <h1>Especialidades</h1>
          </div>
        </div>
        <div className='item itemSalad' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
            <h1>Ensaladas</h1>
          </div>
        </div>
        <div className='item itemPasta' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
            <h1>Pastas</h1>
          </div>
        </div>
        <div className='item itemPostres' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
            <h1>Postres</h1>
          </div>
        </div>
        <div className='item itemCoffe' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
            <h1>Sopas</h1>
          </div>
        </div>
        <div className='item itemTaco' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
            <h1>Entradas</h1>
          </div>
        </div>
        <MenuCont
          active={this.state.showMenu}
          hiddenMenu={() => this.setState({showMenu:false})}
          platillo={this.state.platillo}
        />
        {this.state.showTooglePlace &&
          <FoodCont
            selectPlace={this.selectPlace}
          />
        }
      </div>
    );
  }
}

export default Food;
