import React from 'react';
import FeatherIcon from 'feather-icons-react'

import lineDraft from '../assets/images/draft-line.png'
import maderal1 from '../assets/images/maderal1.png'
import served from '../assets/images/maderal-served.png'
import glass from '../assets/images/beer-draft.png'
import Slider from 'react-slick'

let draft;
export default draft = (props) => {
  const settings= {
    dots: false,
    infinite: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }
    ]
  }
  const beerCurrent = props.beers? props.beers[props.selected]: null;
  return (
    <div className={`contentDraft ${props.showDraft?'visible':''}`}>
      <FeatherIcon
        icon='x-circle' size={30}
        onClick={props.hiddenDraft}
      />
      <div className='sectionDraft'>
        <img className='lineDraft' src={lineDraft} alt='line-draft'/>
        <div className='sliderDraft'>
          <Slider {...settings}>
            {props.beers &&
              props.beers.map((item,i)=>{
              return(
                <div key={i} className='maderal'>
                  <img className={`imgMaderal ${i==props.selected?'active':''}`} onClick={(e)=>props.handleMaderal(e)} src={i==props.selected?served:maderal1} alt='maderal' data-tap={i}/>
                </div>
              )
              })
            }
          </Slider>
        </div>
        <img className='glassServed' src={glass}/>
      </div>
      {props.beers &&
        <div className='sectionDescription'>
          <div className='infoBeer'>
            <div className='logoBeer'>
              <img src={beerCurrent.label_image} />
            </div>
            <div className='descriptionBeer'>
              <div className='titleDescription'>
                <h1>{`${beerCurrent.tap_number}. ${beerCurrent.name}`}</h1> <h1 className='styleBeer'>{beerCurrent.original_style}</h1>
              </div>
              <div className='detailsBeer'>
                <p>{`${beerCurrent.abv}% ABV - ${beerCurrent.ibu} IBU - ${beerCurrent.original_brewery}`}</p>
                <ul className='rankingBeer'>
                  <li className='circleRank'>
                    <div className='fillCircle'></div>
                  </li>
                  <li className='circleRank'>
                    <div className='fillCircle'></div>
                  </li>
                  <li className='circleRank'>
                    <div className='fillCircle'></div>
                  </li>
                  <li className='circleRank'>
                    <div className='fillCircle'></div>
                  </li>
                  <li className='circleRank'>
                    <div className='fillCircle'></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='titleInfo'>
            <h1>Menú de cervezas masaryk</h1>
          </div>
        </div>
      }
    </div>
  );
};
