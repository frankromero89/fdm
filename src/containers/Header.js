import React from 'react';
import FeatherIcon from 'feather-icons-react';
import logoFdm from '../assets/images/logo_fdm.png';

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      actualY: window.pageYOffset
    }
  }

  componentDidMount(){
    if(window.innerWidth > 600){
      window.addEventListener("scroll",this.scrollMenu)
    }
  }

  scrollMenu = (ev) => {
    const {actualY} = this.state
    const $header = document.getElementById('header')
    if( window.pageYOffset > actualY + 50 ){
      $header.classList.add('hidden')
      $header.classList.remove('visible')
      this.setState({ actualY: window.pageYOffset })
    }else if( window.pageYOffset < actualY - 50){
      $header.classList.add('visible')
      $header.classList.remove('hidden')
      this.setState({ actualY: window.pageYOffset })
    }
  }

  toggleMenu = () => {
    const $header = document.getElementById('header')
    $header.classList.toggle('visible')
  }

    handleSection = (value) => {
        const element = document.querySelector(`#${value}`)
        let distanceElement;
        if(value === 'bebidas' ){
            const elemP = element.offsetParent;
            distanceElement = elemP.offsetTop + element.offsetTop;
        }else{
            distanceElement = element.offsetTop;
        }
        window.scrollTo(0, distanceElement)
    }



  render(){
    return(
      <div className='globalHeaderContainer'>
        <FeatherIcon icon='menu' size={40} onClick={this.toggleMenu}/>
      <div
        className={`containerHeader ${window.innerWidth <= 600? 'hidden' : 'visible'}`} id='header'>
        <FeatherIcon
          icon='x-circle' size={20}
          onClick={this.toggleMenu}
        />
        <div className='logoContainer'>
          <img src={logoFdm}/>
        </div>
        <div className='headerOptions'>
          <ul className='optionsHeader'>
            <li
                onClick={ ()=>this.handleSection('who') }
                >
                ¿Quienes Somos?
            </li>
            <li
                onClick={()=>this.handleSection('bebidas') }
            >
                Menú de Bebidas
            </li>
            <li
                onClick={()=>this.handleSection('menuA') }
            >
                Menú de alimentos
            </li>
            <li>
                contacto
            </li>
            {/* <li>
                Encuesta de <br/> satisfacción
            </li> */}
          </ul>
        </div>
      </div>
      </div>
    )
  }
}

export default Header;
