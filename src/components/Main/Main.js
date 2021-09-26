import React, { useEffect, useState } from "react";
import Advisor from "./Advisor/Advisor"; //importing Advisor component
import Checkout from "./Checkout/Checkout";
import Footer from "./Footer/Footer";
import "./Main.css"; //importing css style

const Main = () => {
  const [advisors, setAdvisors] = useState([]);
  const [checkout, setCheckout] = useState([]);
  useEffect(() => {
    fetch("./Consultants.json")
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
      alert("Already Added!!");
    }
  };

  return (
    <main className="px-5  pt-4 pb-1">
      <section className="mb-5">
        <h3 className="about-title">About Us</h3>
        <p className="description mb-5">
          <span>Primo Solutions </span> is a Consultant, or Business Adviser,
          expert advisor who can provides advice, analysis and solutions. We
          enable new and existing businesses to develop and expand. Our duties
          include developing business plans, advising on financial matters and
          identifying areas for growth within a company.
        </p>
        <h2 className="advisor-title text-center">
          Our Consultants (<span>starting from $1</span>)
        </h2>
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
          </div>
        </section>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Main;
