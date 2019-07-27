import React, { Component } from 'react';
import FoodCont from '../components/food';

class Food extends Component {
  render() {
    return (
      <div className='containerFood allView'>
        <div className='maskContainerFood bg_brownD'></div>
        <FoodCont />
      </div>
    );
  }
}

export default Food;