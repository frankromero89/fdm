import React, { Component } from 'react';

import CoverComp from '../components/cover'

class Cover extends Component {

  // componentDidMount(){
  //   window.addEventListener('scroll',function(e){
  //     var scrolled = window.pageYOffset
  //     const back = document.querySelector('.containerCover')
  //     back.style.top = `${scrolled*.2}px`
  //   })
  // }

  render() {
    return (
      <div className="containerCover">
        <CoverComp />
      </div>
    );
  }
}

export default Cover;
