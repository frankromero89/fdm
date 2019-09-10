import React, {Component} from 'react'

class TitleAnimate extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount() {
    window.addEventListener("scroll",this.scrollAnimate);
      const $reviews = document.querySelectorAll('.titleAnimate');
      const options = {
         threshold: 1
      }
      console.log($reviews)
      for(let i = 0; i < $reviews.length; i ++) {

        const callback = (entries, observer) => {
           if(entries[0].isIntersecting){
              $reviews[i].classList.add('animate')
           }else{
              $reviews[i].classList.remove('animate')
           }
        }

      const observer = new IntersectionObserver(callback, options);
      observer.observe($reviews[i]);
    }
 }

  render(){
    return(
      <div className='titleAnimate'>
        <span className={`first ${this.props.color&& this.props.color}`}></span>
        {this.props.text}
        <span className={`last ${this.props.color&& this.props.color}`}></span>
      </div>

    )
  }
}

export default TitleAnimate;
