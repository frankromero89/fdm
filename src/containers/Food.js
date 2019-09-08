import React, { Component } from 'react';
import FoodCont from '../components/food';
import MenuCont from '../components/menu_masaryk';

class Food extends Component {
  constructor(props){
    super(props)
    this.state = {
      showMenu: false
    }
  }

  toogleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }


  render() {
    return (
      <div className='containerFood allView'>
        <div className='item itemBeer'>
          <div className='maskContainerFood bg_brownD'
            onClick={this.toogleMenu}>
          </div>
        </div>
        <div className='item itemMenu' >
        </div>
        <div className='item itemHamburguer' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
          </div>
        </div>
        <div className='item itemchicken' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
          </div>
        </div>
        <div className='item itemSalad' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
          </div>
        </div>
        <div className='item itemPasta' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
          </div>
        </div>
        <div className='item itemPostres' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
          </div>
        </div>
        <div className='item itemCoffe' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
          </div>
        </div>
        <div className='item itemTaco' onClick={this.toogleMenu}>
          <div className='maskContainerFood bg_brownD'>
          </div>
        </div>
        <MenuCont
          active={this.state.showMenu}
          hiddenMenu={() => this.setState({showMenu:false})}
        />

        {/*
        <FoodCont />
        */}
      </div>
    );
  }
}

export default Food;
