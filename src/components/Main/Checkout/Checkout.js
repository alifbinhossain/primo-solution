import React from "react";
import CheckoutItem from "./Checkout-item/Checkout-item";
import "./Checkout.css"; //importing css style

const Checkout = (props) => {
  const { checkout } = props;
  const { setCheckout } = props;
  //   console.log(checkout);
  const totalCost = checkout.reduce(
    (prev, current) => prev + current.charge,
    0
  );
  //   console.log(totalCost);
  return (
    <div className="checkout ms-3 p-4">
      <h5>
        Total Added :
        <button class=" position-relative btn-users ms-3">
          <i class="fas fa-users"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {checkout.length}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </h5>
      <h5 className="mb-3">Total Cost : $ {totalCost}</h5>
      <ul className="added-list">
        {checkout.map((advisor) => (
          <CheckoutItem key={advisor.key} advisor={advisor}></CheckoutItem>
        ))}
      </ul>
      <button onClick={() => setCheckout([])} className="btn-clear">
        Clear All
      </button>
    </div>
  );
};

export default Checkout;