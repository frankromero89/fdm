import React, { Component } from 'react';
import GalleryComp from '../components/gallery'
class Gallery extends Component {
  render() {
    return (
      <div className='containerGallery allView'>
        <GalleryComp />
      </div>
    );
  }
}

export default Gallery;