import React from 'react';
import Assets from '../helper/Assets';
import './Gallery.css';

const Gallery = () => {

    return (<div>
        <img className="gallery-img" src={Assets.Image1} alt="Image 1" />
        <img className="gallery-img" src={Assets.Image2} alt="Image 2" />
        <img className="gallery-img" src={Assets.Image3} alt="Image 3" />
    </div>)

}

export default Gallery;