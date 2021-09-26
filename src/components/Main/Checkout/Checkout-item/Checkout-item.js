import React from "react";
import "./Checkout-item.css";

const CheckoutItem = (props) => {
  const { advisor } = props;
  const { firstName, lastName, charge, photo, jobTitle } = advisor;
  return (
    <li className="list-item d-flex justify-content-between align-items-center">
      <img src={photo} alt="" />
      <div className="item-user d-flex align-items-center justify-content-between">
        <small>
          <span className="text-bold">
            {firstName} {lastName}{" "}
          </span>
          <br />
          <span className="job-title">{jobTitle.slice(0, 18)}..</span>
        </small>
        <small>
          <i class="fas fa-check-circle check-circle"></i>
        </small>
      </div>
      {/* <small className="text-warning">${charge}</small> */}
    </li>
  );
};

export default CheckoutItem;
