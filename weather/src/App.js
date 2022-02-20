import React from 'react';
import SearchPanel from './components/SearchPanel/search-panel.js';
import ButtonsPanel from './components/ButtonsPanel/buttons-panel.js';
import WeatherBlock from './components/WeatherBlock/weather-block.js';
import MapBlock from './components/MapBlock/map-block.js';
import './App.css';


function App() {
  return (
    <div className='wrapper d-flex flex-column justify-content-center'>
      <header className='header d-flex justify-content-between'>
        <ButtonsPanel />
        <SearchPanel />
      </header>
      <main className='main d-flex justify-content-between'>
        <WeatherBlock/>
        <MapBlock/>
      </main>
    </div>
  )
}

export default App;
