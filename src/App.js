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

import './assets/scss/index.scss'

class App extends React.Component {
  render(){
    return (
      <div className="App" style={{position:'relative'}}>
        <Header />
        <div style={{position:'relative'}}>
          <Cover />
          <Who />
          <Draft />
          <Drinks />
          <Food />
          <Boobles />
          <Branches />
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
