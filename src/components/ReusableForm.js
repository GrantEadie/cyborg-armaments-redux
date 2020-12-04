import React from 'react';
import PropTypes from "prop-types";

function NewPartForm(props) {
  
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className="form-group">
        <input
        className="form-control"
          type='text'
          name='partName'
          placeholder='Part Name' /><br/>
        <textarea
        className="form-control"
          type='text'
          name='partDesc'
          placeholder='Description' /><br/>
        <input
        className="form-control"
          type="number"
          name='partQuantity'
          placeholder='Quantity' /><br/>
        <input
        className="form-control"
        type='number'
        name='partPrice'
        placeholder='Price'/><br/>
          
        <select className="form-control" name='partBodyType' placeholder='Modification Type'>
          <option value="0">Vision and Auditory</option>
          <option value="1">Torso and Center Mass</option>
          <option value="2">Arms or Upper Appendages</option>
          <option value="3">Legs or Lower Appendages</option>
          <option value="4">Neurotech and Comp Enhancements</option>
          <option value="5">External Instruments</option>
        </select><br/>

        <button className="btn btn-outline-light btn-block" type='submit'>{props.buttonText}</button>
        </div>
      </form>

    </React.Fragment>
  );
}

NewPartForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewPartForm;
