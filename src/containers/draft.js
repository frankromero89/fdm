import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';

import DraftComp from '../components/draft'
import DraftCompLerma from '../components/draft_lerma'
import TitleAnimate from '../components/titleAnimate'


import { getBeers, getBeersLerma } from '../helpers/draft'
import { moveGlass } from '../helpers/helpers'


class draft extends Component {
  constructor(props){
    super(props)
    this.state={
      beers: null,
      beersLerma: null,
      beerSelected: 0,
      beerSelectedLerma: 0,
      showDraft: false,
      showDraftLerma: false
    }
  }

  componentWillMount(){
    getBeers()
    .then(res=>{
      this.setState({beers: res.items})
    })
    getBeersLerma()
    .then(res=>{
      this.setState({beersLerma: res.items})
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
    setTimeout(()=>{
        moveGlass();
        moveGlass(true);
    },3000)
  }

  componentDidUpdate(prevProps, prevState){
    const glassLerma= document.querySelector('.glassServedLerma');
    const glassMasaryk= document.querySelector('.glassServed');
    if(this.state.showDraft){
      if(prevState.beers !== this.state.beers) {
        setTimeout(()=>{moveGlass()}, 300);
      }
      if(prevState.beerSelected !== this.state.beerSelected){
        glassMasaryk.classList.remove('animated');
        setTimeout(()=>{moveGlass()},300)
      }
    }
    if(this.state.showDraftLerma){
      console.log('here');
      if(prevState.beersLerma !== this.state.beersLerma){
        const {rating} = this.state.beers[this.state.beerSelected]
        setTimeout(()=>{moveGlass(true)},1000)
      }
      if(prevState.beerSelectedLerma !== this.state.beerSelectedLerma){
        const {rating} = this.state.beers[this.state.beerSelected]
        console.log('change selected');
        setTimeout(()=>{moveGlass(true)}, 300);
      }
    }
  }

  handleMaderal=(e, lerma=false)=>{
    const numMad = e.target.getAttribute('data-tap')
    console.log(numMad);
    if (lerma) {
        console.log('is lerma')
        this.setState({beerSelectedLerma: numMad})
    }else {
        this.setState({beerSelected: numMad})
    }
  }

  render() {
    return (
      <div className='containerDraft'>
        <div className='contentDrafts'>
          <TitleAnimate text={<h1 className='titleSection'>Menú de cervezas</h1>}
              color='white' />

          <h3 className='white cinzel'>Cervezas conectadas en tiempo real</h3>

          <div className='containerTriggersDraft'>
              <div className='titleInfo'
                  onClick={() => this.setState({showDraft: true})}
              >
                  <h1 className='cinzel'>Menu de cervezas masaryk</h1>
              </div>

              <div className='titleInfoLerma'
                  onClick={() => this.setState({showDraftLerma: true})}
              >
                  <h1 className='cinzel'>Menu de cervezas Lerma</h1>
              </div>
          </div>
        </div>
        <DraftComp
            beers = {this.state.beers}
            handleMaderal={this.handleMaderal}
            selected={this.state.beerSelected}
            showDraft={this.state.showDraft}
            hiddenDraft={()=>this.setState({showDraft:false})}
        />
        <DraftCompLerma
            beers = {this.state.beersLerma}
            handleMaderal={this.handleMaderal}
            selected={this.state.beerSelectedLerma}
            showDraft={this.state.showDraftLerma}
            hiddenDraft={()=>this.setState({showDraftLerma:false})}
        />
      </div>
    );
  }
}

export default draft;
