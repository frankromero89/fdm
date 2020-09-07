import React, { Component } from 'react';
import GalleryComp from '../components/gallery'
import { getToken } from '../helpers/instagram'

class Gallery extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataImg: null
        }
    }
    componentDidMount(){
        getToken().then(res => {
            this.setState({dataImg: res})
        })
    }

  render() {
    return (
      <div className='containerGallery parallax'>
        <GalleryComp
            gallery={this.state.dataImg}
        />
      </div>
    );
  }
}

export default Gallery;
