import React from "react";
import "./Advisor.css"; //importing css style

const Advisor = (props) => {
  const { advisor } = props;
  const { handleBtnHire } = props;
  const {
    firstName,
    lastName,
    phoneNumber,
    emailAddress,
    city,
    country,
    jobTitle,
    company,
    photo,
  } = advisor;

  const charge = advisor.charge
    ? advisor.charge
    : Math.round(Math.random() * 100);
  advisor.charge = charge;
  // console.log(advisor);
  return (
    <div class="col">
      <div class="card p-3 pb-0">
        <div className="my-card d-flex flex-column justify-content-between">
          <img src={photo} class="card-img-top" alt="..." />
          <div class="card-body px-0 d-flex flex-column justify-content-between">
            <h5 class="card-title text-center mb-3">
              {firstName} {lastName}
            </h5>
            <div className="advisor-info">
              <p class="card-text">
                <small>
                  <span>
                    <i class="fas fa-phone-alt"></i>
                  </span>{" "}
                  : {phoneNumber}
                </small>{" "}
                <br />
                <small>
                  <span>
                    <i class="fas fa-envelope"></i>
                  </span>{" "}
                  : {emailAddress}
                </small>{" "}
                <br />
                <small>
                  <span>
                    <i class="fas fa-location-arrow"></i>
                  </span>{" "}
                  : {city} , {country}
                </small>{" "}
                <br />
                <small>
                  <span>
                    <i class="fas fa-user-tie"></i>
                  </span>{" "}
                  : {jobTitle},<span>{company}</span>
                </small>
                <br />
                <small>
                  <span>Session charge</span> :{" "}
                  <span className="text-warning">${charge}</span>/{" "}
                  <span>hour</span>
                </small>
              </p>
              <div className="icon-box d-flex justify-content-center align-items-center mb-4">
                <a className="me-3" href="/">
                  <i class="fab fa-facebook icon"></i>
                </a>
                <a className="me-3" href="/">
                  <i class="fab fa-twitter icon"></i>
                </a>
                <a href="/">
                  <i class="fab fa-linkedin-in icon"></i>
                </a>
              </div>
              <button
                onClick={() => handleBtnHire(advisor)}
                className="btn-hire"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
