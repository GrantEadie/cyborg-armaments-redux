import React from "react";
import CartPart from "./CartPart";
import PropTypes from "prop-types";


function CartList(props) {

  return (
    <React.Fragment>
    <hr id="fancy" />
    <div className="cartDetails">
      <h2>Your Cart <span className="cartTotal float-right mt-2">{props.cartTotal} ⅊</span></h2>
      
      </div>
      <hr />
      {props.cartList.map((part, index) =>
        <CartPart
          partName={part.partName}
          partBodyType={part.partBodyType}
          partDescription={part.partDescription}
          partQuantity={part.partQuantity}
          partPrice={part.partPrice}
          cartTotal={part.cartTotal}
          key={index} 
          id={part.id}
          onDeleteCartPart={props.onDeleteCartPart}/>
      )}
      <button className="btn btn-outline-light btn-sm float-right">Checkout</button>
    </React.Fragment>
  );
}

CartList.propTypes = {
  onDeleteCartPart: PropTypes.func,
  cartList: PropTypes.array,
  cartTotal: PropTypes.number
}

export default CartList;