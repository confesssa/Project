import React from "react";
import './weather-block.css';

function WeatherBlock() {
  return (
    <div className='weather-block'>
    <p>Minsk, Belarus</p>
    <p>
      <span>Mon 28 October</span>
      <span>12.13</span>
    </p>
    <div className='row'>
      <div className='col'>10°</div>
      <div className='col'>
        <p>Overcast</p>
        <p>Feels like: <span>7°</span></p>
        <p>Wind: <span>2 m/c</span></p>
        <p>Humidity: <span>83%</span></p>
      </div>
    </div>
    <div className='row'>
      <div className='col text-center'>
        <p>Tuesday</p>
        <p><span>7°</span></p>
      </div>
      <div className='col text-center'>
        <p>Tuesday</p>
        <p><span>7°</span></p>
      </div>
      <div className='col text-center'>
        <p>Tuesday</p>
        <p><span>7°</span></p>
      </div>
    </div>
  </div>
  )
}

export default WeatherBlock;