import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header'
import Cover from './containers/cover'
import Who from './containers/Who_are'
import Drinks from './containers/Drinks'
import Food from './containers/Food'
import Boobles from './containers/Boobles'
import Branches from './containers/Branches'
import Gallery from './containers/Gallery'
import Draft from './containers/draft'
import Promos from './containers/Promos'
import Test from './containers/test'
import NetBar from './containers/network-bar'
import Logof from './assets/images/logof.png'

import './assets/scss/index.scss'

class App extends React.Component {
  render(){
    return (
      <div className="App" style={{position:'relative'}}>
        <Header />
        <NetBar />
        <div style={{position:'relative'}}>
          <Cover />
          <Who />
          <Draft />
          <Drinks />
          <Food />
          <Promos />
          {/*<Boobles />*/}
          <Branches />
          {/* <Gallery /> */}
          {/*}<Test />*/}
        </div>
        <div className='footer'>
            <div className='contFooter'>
                <p>Facturacion</p>
                <span className='gold ml1 mr1'>|</span>
                <p>Cuentanos tu experiencia</p>
            </div>
            <img src={Logof}/>
        </div>
      </div>
    );
  }
}

export default App;
