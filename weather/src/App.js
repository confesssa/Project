import React from 'react';
import SearchPanel from './components/SearchPanel/search-panel.js';
import ButtonsPanel from './components/ButtonsPanel/buttons-panel.js';
import './App.css';


function App() {
  return (
    <div className='wrapper d-flex justify-content-center'>
      <header className='header d-flex justify-content-between'>
        <ButtonsPanel />
        <SearchPanel />
      </header>
    </div>
  )
}

export default App;
