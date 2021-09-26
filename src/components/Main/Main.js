import React, { useEffect, useState } from "react";
import Advisor from "./Advisor/Advisor"; //importing Advisor component
import Checkout from "./Checkout/Checkout";
import "./Main.css"; //importing css style

const Main = () => {
  const [advisors, setAdvisors] = useState([]);
  const [checkout, setCheckout] = useState([]);
  useEffect(() => {
    fetch("./People-2.json")
      .then((res) => res.json())
      .then((data) => setAdvisors(data));
  }, []);

  /* ---------------------- HIRE ME BUTTON FUNCTIONALLITY --------------------- */
  const handleBtnHire = (product) => {
    const newCheckout = [...checkout, product];
    const isExist = checkout.find((eP) => eP.id === product.id);
    if (!isExist) {
      setCheckout(newCheckout);
    } else {
      alert("Already Added");
    }
  };
  /* --------------------- CLEAR ALL BUTTON FUNCTIONALLITY -------------------- */
  const handleToClear = () => {};
  /* ----------------------------------- JSX ---------------------------------- */
  return (
    <main className="py-4">
      <section className="container">
        <h1 className="text-center my-2 title">Primo Solution</h1>
        <h3 className="about-title mb-3">About Us</h3>
        <p className="description mb-5">
          A Consultant, or Business Adviser, provides expert advice, analysis
          and solutions. We enable new and existing businesses to develop and
          expand. Our duties include developing business plans, advising on
          financial matters and identifying areas for growth within a company.
        </p>
        <h2 className="advisor-title text-center">Our Consultants</h2>
        <section className="content pt-4">
          {/* ADVISOR CONTAINER */}
          <div className="advisors-container">
            {/* GRID CARD */}
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {advisors.map((advisor) => (
                <Advisor
                  advisor={advisor}
                  key={advisor.id}
                  handleBtnHire={handleBtnHire}
                ></Advisor>
              ))}
            </div>
            {/* GRID CARD */}
          </div>
          {/* CHECKOUT CONTAINER */}
          <div className="checkout-container">
            <Checkout checkout={checkout} setCheckout={setCheckout}></Checkout>
            {/* {checkout.map((product) => (
              <Checkout product={product} key={product.id}></Checkout>
            ))} */}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Main;
