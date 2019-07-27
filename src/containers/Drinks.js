import React, { Component } from 'react';
import BeerCont from '../components/cervezas'
import DrinksCont from '../components/drinks'

class Cervezas extends Component {
  render() {
    return (
      <div className='allView containerDrinks'>
        <BeerCont />
        <DrinksCont />
      </div>
    );
  }
}

export default Cervezas;