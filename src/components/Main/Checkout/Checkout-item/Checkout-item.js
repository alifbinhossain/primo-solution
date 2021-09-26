import React from "react";
import "./Checkout-item.css";

const CheckoutItem = (props) => {
  const { advisor } = props;
  const { firstName, lastName, charge, photo } = advisor;
  console.log(advisor);
  return (
    <li className="list-item d-flex justify-content-between align-items-center">
      <img src={photo} alt="" />
      <small>
        {firstName} {lastName}
      </small>
      <small>$ {charge}</small>
    </li>
  );
};

export default CheckoutItem;
