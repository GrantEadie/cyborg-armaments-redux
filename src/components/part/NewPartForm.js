import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "../ReusableForm";

function NewPartForm(props) {

  function handleNewPartFormSubmission(event) {
    event.preventDefault();
    props.onNewPartCreation({ partName: event.target.partName.value, partDescription: event.target.partDesc.value, partBodyType: event.target.partBodyType.value, partQuantity: event.target.partQuantity.value, id: v4(), cartTotal: 0, partPrice: event.target.partPrice.value })
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPartFormSubmission}
        buttonText="Add Part" />
    </React.Fragment>
  );
}

NewPartForm.propTypes = {
  onNewPartCreation: PropTypes.func
};

export default NewPartForm;