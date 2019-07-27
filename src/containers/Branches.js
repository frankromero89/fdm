import React, { Component } from 'react';
import BranchesComp from '../components/branches'

class Branches extends Component {
  render() {
    return (
      <div className='containerBranches allView'>
        <BranchesComp />
      </div>
    );
  }
}

export default Branches;