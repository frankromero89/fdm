import React, { Component } from 'react';
import BeerCont from '../components/cervezas'
import DrinksCont from '../components/drinks'
import ImgDivide from '../assets/images/trigo.png'

class Cervezas extends Component {
  // componentDidMount(){
  //   window.addEventListener('scroll',function(e){
  //     const totalW = window.innerHeight;
  //     var scrolled = window.pageYOffset
  //     const back = document.querySelector('.containerDrinks')
  //     let distanceBack = back.getBoundingClientRect().top
  //       if(distanceBack <= totalW){
  //         back.style.top = `-${scrolled*.12}px`
  //       }
  //   })
  // }
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
