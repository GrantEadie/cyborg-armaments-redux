import React from "react";
import BodyType from "./BodyType";
import PropTypes from "prop-types";


function BodyTypeList(props) {
  return (
    <React.Fragment>
      <BodyType
        bodyType={props.availableParts[props.currentIndex].bodyType}
        selection={props.availableParts[props.currentIndex].selection}
        onPartSelection={props.onPartSelection}
        onBuyPart={props.onBuyPart}
        
        />
    </React.Fragment>
  );  
}

BodyTypeList.propTypes = {
  key: PropTypes.number,
  currentIndex: PropTypes.number,   
  availableParts: PropTypes.array,
  onPartSelection: PropTypes.func,
  onBuyPart: PropTypes.func
}

export default BodyTypeList;

