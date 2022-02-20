import React from 'react';
import SearchPanel from './components/SearchPanel/search-panel.js';
import ButtonsPanel from './components/ButtonsPanel/buttons-panel.js';
import './App.css';


function App() {
  return (
    <div className='wrapper d-flex flex-column justify-content-center'>
      <header className='header d-flex justify-content-between'>
        <ButtonsPanel />
        <SearchPanel />
      </header>
      <main className='main d-flex justify-content-between'>
        <div>
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
            <div className='col'>
              <p>Tuesday</p>
              <p><span>7°</span></p>
            </div>
            <div className='col'>
              <p>Tuesday</p>
              <p><span>7°</span></p>
            </div>
            <div className='col'>
              <p>Tuesday</p>
              <p><span>7°</span></p>
            </div>
          </div>
        </div>
        <div>
          <div className='image'></div>
          <p>Latitude: <span>53.32</span></p>
          <p>Longitude: <span>32.34</span></p>
        </div>
      </main>
    </div>
  )
}

export default App;
