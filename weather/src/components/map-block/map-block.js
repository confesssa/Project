import React, { useState } from "react";
import './map-block.css';

function MapBlock() {
  let crd;
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    crd = pos.coords;

    // console.log(crd);

    // console.log('Ваше текущее местоположение:');
    // console.log(`Широта: ${crd.latitude}`);
    // console.log(`Долгота: ${crd.longitude}`);
    // console.log(`Плюс-минус ${crd.accuracy} метров.`);

    return crd;
    // const latitude = crd.latitude;
    // const longitude = crd.longitude;
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  
  const [position, setState] = useState(navigator.geolocation.getCurrentPosition(success, error, options));
  console.log(position);

  return (
    <div className='map-block'>
      <div className='image'></div>
      <p>Latitude: <span>{position.latitude}</span></p>
      <p>Longitude: <span>{position.longitude}</span></p>
  </div>
  )
}

export default MapBlock;