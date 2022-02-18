import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight, faSearch, faMicrophone} from '@fortawesome/free-solid-svg-icons';
import './App.css';

function ButtonsPanel() {
  return (
    <div className='buttons-panel d-flex'>
      <div className="btns" role="group" aria-label="First group">
        <button type="button" className="button btn bg-transparent btn-outline-light">
        <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
      </div>

      <div className="btns" role="group" aria-label="Second group">
        <button type="button" className="button btn bg-transparent btn-outline-light">EN</button>
        <button type="button" className="button btn bg-transparent btn-outline-light">RU</button>
        <button type="button" className="button btn bg-transparent btn-outline-light">BY</button>
      </div>

      <div className="btns" role="group" aria-label="Third group">
        <button type="button" className="btn bg-transparent btn-outline-light">°F</button>
        <button type="button" className="btn bg-transparent btn-outline-light">°C</button>
      </div>
    </div>

  )
}

function SearchPanel() {
  return (
    <div className='SearchPanel d-flex'>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text" id="btnGroupAddon">@</div>
        </div>
        <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
      </div>

    <div className="btns" role="group" aria-label="First group">
      <button type="button" className="button btn bg-transparent btn-outline-light">
      <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  </div>

  )
}

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
