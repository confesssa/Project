import React from "react";
import './map-block.css';

function MapBlock() {
  return (
    <div className='map-block'>
      <div className='image'></div>
      <p>Latitude: <span>53.32</span></p>
      <p>Longitude: <span>32.34</span></p>
  </div>
  )
}

export default MapBlock;