import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

function SearchPanel() {
  return (
    <div className='SearchPanel d-flex'>
      <div className="btns input-group">
        <input type="text" placeholder="Search city" className="bg-transparent form-control" aria-label="Input group example" aria-describedby="btnGroupAddon" />
        <div className="input-group-prepend">
          <div className="input-group-text" id="btnGroupAddon">@</div>
        </div>
      </div>

    <div className="btns" role="group" aria-label="First group">
      <button type="button" className="button btn bg-transparent btn-outline-light">
      <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  </div>
  )
}

export default SearchPanel;