import React, { Component } from 'react';
import BranchesComp from '../components/branches'

class Branches extends Component {

  redirectTheFork = (lerma=false) => {
    if (lerma) window.open("https://www.thefork.com.mx/restaurante/fiebre-de-malta-rio-lerma-r492695", "_blank");
    else window.open("https://www.thefork.com.mx/restaurante/fiebre-de-malta-polanco-r492693", "_blank");
  }

  render() {
    return (
      <div className='containerBranches allView'>
        <BranchesComp redirectTheFork={this.redirectTheFork} />
      </div>
    );
  }
}

export default Branches;