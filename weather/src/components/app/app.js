import React from 'react';
import SearchPanel from '../search-panel/search-panel.js';
import ButtonsPanel from '../buttons-panel/buttons-panel.js';
import WeatherBlock from '../weather-block/weather-block.js';
// import MapBlock from './components/map-block/map-block.js';
import './app.css';


function App() {
  return (
    <div className='wrapper d-flex flex-column justify-content-center'>
      <header className='header d-flex justify-content-between'>
        <ButtonsPanel />
        <SearchPanel />
      </header>
      <main className='main d-flex justify-content-between'>
        <WeatherBlock/>
        {/* <MapBlock/> */}
      </main>
    </div>
  )
}

export default App;
