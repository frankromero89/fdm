import React, { Component } from 'react';
import WhoCont from '../components/who_are'


class How_are extends Component {

  // componentDidMount(){
  //   window.addEventListener('scroll',function(e){
  //     const scrolled = window.pageYOffset
  //     const back = document.querySelector('.containerWho')
      
  //     // back.pageYOffset
  //     // if back.
  //     // // back.style.top = `-${scrolled*.2}px`
  //   })
  // }
  render() {
    return (
      <div className='containerWho allView'>
        <WhoCont />
      </div>
    );
  }
}

export default How_are;