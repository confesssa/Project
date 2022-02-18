import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight} from '@fortawesome/free-solid-svg-icons';


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

export default ButtonsPanel;