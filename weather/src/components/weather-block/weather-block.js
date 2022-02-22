import React from "react";
import './weather-block.css';

function WeatherBlock() {
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let today = new Date();
  let getDate = () => {
    let hours = today.getHours().toString().length < 2 ? `0${today.getHours()}`: today.getHours();
    let minutes = today.getMinutes().toString().length < 2 ? `0${today.getMinutes()}`: today.getMinutes();
    let seconds = today.getSeconds().toString().length < 2 ? `0${today.getSeconds()}`: today.getSeconds();
    return `${week[today.getDay()]} ${today.getDate()} ${months[today.getMonth()]} ${hours}:${minutes}:${seconds}`;
  };
  let currentDay = getDate();

  return (
    <div className='weather-block'>
    <p>Minsk, Belarus</p>
    <p className="date">{currentDay}</p>
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