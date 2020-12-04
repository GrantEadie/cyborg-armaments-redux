import React from "react";
import PropTypes from "prop-types";
import Part from "../part/Part";
import { v4 } from 'uuid';

function BodyType(props){

  const ulStyle = {
    padding:0
  }

  return(
    <React.Fragment>
      <h2>{props.bodyType}</h2>
      <p style={{display: "inline"}}><em>available stock</em></p>
      <hr/>
      <ul style={ulStyle}>
        {props.selection.map((part) =>
        <li key={v4()} ><Part
        onBuyPart={props.onBuyPart}
        whenPartClicked = {props.onPartSelection}
        partName={part.partName}
        partDescription={part.partDescription} 
        partQuantity={part.partQuantity}  
        partPrice={part.partPrice}           
        id={part.id}
        key={part.key}/>
        </li>
        )}
      </ul>

    </React.Fragment>
  )
}

BodyType.propTypes = {
  bodyType: PropTypes.string,
  selection: PropTypes.array,
  onPartSelection: PropTypes.func,
  onBuyPart: PropTypes.func,
  whenPartClicked: PropTypes.func,
  key: PropTypes.number,
  id: PropTypes.number
};
export default BodyType;