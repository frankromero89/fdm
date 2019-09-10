import React from 'react'
import FeatherIcon from 'feather-icons-react'

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
          <img src='https://fiebre.s3.us-east-2.amazonaws.com/fiebre/Logo+FdM-01.png'/>
        </div>
        <div className='headerOptions'>
          <ul className='optionsHeader'>
            <li>¿Quienes Somos?</li>
            <li>Menú de Bebidas</li>
            <li>Menú de alimentos</li>
            <li>Club Fiebrecero</li>
            <li>facturación</li>
            <li>contacto</li>
            <li>Encuesta de <br/> satisfacción</li>
            <li>Noticias</li>
          </ul>
        </div>
      </div>
      </div>
    )
  }
}

export default Header;
