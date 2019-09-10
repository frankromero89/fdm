import React, { Component } from 'react';

import DraftComp from '../components/draft'

import { getBeers } from '../helpers/draft'
import { rankingBeer, moveGlass } from '../helpers/helpers'


class draft extends Component {
  constructor(props){
    super(props)
    this.state={
      beers: null,
      beerSelected: 0,
      showDraft: false
    }
  }

  componentWillMount(){
    getBeers()
    .then(res=>{
      this.setState({beers: res.items})
    })
  }

  componentDidMount(){
    // window.addEventListener('scroll',function(e){
    //   const totalW = window.innerHeight;
    //   var scrolled = window.pageYOffset
    //   const back = document.querySelector('.containerDraft')
    //   let distanceBack = back.getBoundingClientRect().top
    //   // if(distanceBack <= totalW){
    //     back.style.top = `-${scrolled*.1}px`
    //   // }
    // })
    setTimeout(()=>{moveGlass()},1000)
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.showDraft){
      if(prevState.beers !== this.state.beers){
        const {rating} = this.state.beers[this.state.beerSelected]
        rankingBeer(rating)
        setTimeout(()=>{moveGlass()},1000)
      }
      if(prevState.beerSelected !== this.state.beerSelected){
        const {rating} = this.state.beers[this.state.beerSelected]
        rankingBeer(rating)
        moveGlass()
      }
    }
  }

  handleMaderal=(e)=>{
    const numMad = e.target.getAttribute('data-tap')
    this.setState({beerSelected: numMad})
  }

  render() {
    return (
      <div className='containerDraft'>
          <DraftComp
            beers = {this.state.beers}
            handleMaderal={this.handleMaderal}
            selected={this.state.beerSelected}
            showDraft={this.state.showDraft}
            hiddenDraft={()=>this.setState({showDraft:false})}
          />
        <div className='titleInfo'
          onClick={() => this.setState({showDraft: true})}>
          <h1>Menu de cervezas masaryk</h1>
        </div>
      </div>
    );
  }
}

export default draft;
