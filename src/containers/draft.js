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
    }
  }

  componentWillMount(){
    getBeers()
    .then(res=>{
      this.setState({beers: res.items})
    })
  }

  componentDidUpdate(prevProps, prevState){
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

  handleMaderal=(e)=>{
    const numMad = e.target.getAttribute('data-tap')
    this.setState({beerSelected: numMad})
  }

  render() {
    // console.log(this.state.beers)
    return (
      <div className='allView containerDraft'>
        <DraftComp 
          beers = {this.state.beers}
          handleMaderal={this.handleMaderal}
          selected={this.state.beerSelected}
        />
      </div>
    );
  }
}

export default draft;