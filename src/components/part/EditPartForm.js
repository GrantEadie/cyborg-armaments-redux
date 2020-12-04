import React from "react";
import ReusableForm from "../ReusableForm";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function EditPartForm(props) {

  function handleEditPartFormSubmission(event) {
    event.preventDefault();
    props.onEditPart({
      partName: event.target.partName.value,
      partDescription: event.target.partDesc.value,
      partBodyType: event.target.partBodyType.value,
      partQuantity: event.target.partQuantity.value,
      id: v4()
    })
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditPartFormSubmission}
        buttonText="Update Part" />
    </React.Fragment>
  );
}

EditPartForm.propTypes = {
  onEditPart: PropTypes.func
};

export default EditPartForm;