import React from "react";
import PropTypes from "prop-types";

function Part(props){
  return (
    <React.Fragment>
      <div className="detailClick" onClick = {() => props.whenPartClicked(props.id)}>
        <p className="itemTitle">{props.partName}</p>
          <div >
            <p className="detailBar">{props.partPrice} ⅊ </p>
            <p className="detailBar">{props.partQuantity} <span id="stock">in stock</span></p>
          </div>
        </div>
        <button className="float-right btn btn-outline-light btn-sm buy" onClick = {() => props.onBuyPart(props.id)}>Add to Cart</button>
        <br/>
        <hr />

    </React.Fragment>
  );
}

Part.propTypes = {
  partName: PropTypes.string,
  partDescription: PropTypes.string,
  partBodyType: PropTypes.string,
  partQuantity: PropTypes.number,
  partPrice:PropTypes.number,
  id: PropTypes.number,
  key: PropTypes.number,
  whenPartClicked: PropTypes.func,
  onBuyPart: PropTypes.func
};

export default Part;