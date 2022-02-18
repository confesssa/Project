import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight, } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className='wrapper d-flex justify-content-center'>
      <header className='header d-flex justify-content-between'>
        <div className='ButtonsPanel'>
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn bg-transparent btn-outline-light">
            <FontAwesomeIcon icon={faArrowRotateRight} />
            </button>
          </div>

          <div class="btn-group mr-4" role="group" aria-label="Second group">
            <button type="button" class="btn bg-transparent btn-outline-light">EN</button>
            <button type="button" class="btn bg-transparent btn-outline-light">RU</button>
            <button type="button" class="btn bg-transparent btn-outline-light">BY</button>
          </div>

          <div class="btn-group mr-2" role="group" aria-label="Third group">
            <button type="button" class="btn bg-transparent btn-outline-light">°F</button>
            <button type="button" class="btn bg-transparent btn-outline-light">°C</button>
          </div>
        </div>
        <div className='SearchPanel'>2</div>
      </header>
    </div>
  )
}

export default App;
