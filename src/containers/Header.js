import React from 'react'

class Header extends React.Component {
  render(){
    return(
      <div className='containerHeader'>
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
    )
  }
}

export default Header;
