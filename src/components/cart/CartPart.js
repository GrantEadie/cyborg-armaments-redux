import React from "react";
import PropTypes from "prop-types";

function CartPart(props){
  return (
    <React.Fragment>
        <p className="itemTitle">{props.partName}</p>
        <p>{props.partDescription}</p>
        <div >
            <p className="detailBar">{props.partPrice} ⅊ </p>
            <p className="detailBar">{props.cartTotal} <span id="stock">total</span></p>
          </div>
        <button onClick = {() => props.onDeleteCartPart(props)} className="buy btn btn-outline-light btn-sm"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg></button>
        <hr/>

    </React.Fragment>
  );
}

CartPart.propTypes = {
  partName: PropTypes.string,
  partDescription: PropTypes.string,
  partBodyType: PropTypes.string,
  partCartTotal: PropTypes.number,
  id: PropTypes.number,
  key: PropTypes.number,
  whenPartClicked: PropTypes.func,
  onDeleteCartPart: PropTypes.func
};

export default CartPart;