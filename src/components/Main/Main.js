import React, { useEffect, useState } from "react";
import Advisor from "./Advisor/Advisor";
import "./Main.css";

const Main = () => {
  const [advisors, setAdvisors] = useState([]);
  useEffect(() => {
    fetch("./People-2.json")
      .then((res) => res.json())
      .then((data) => setAdvisors(data));
  }, []);
  //   advisors.length = 15;
  //   console.log(JSON.stringify(advisors));
  return (
    <main className="py-4">
      <section className="container">
        <h1 className="text-center mb-2 title">Primo Solution</h1>
        <h3 className="about-title mb-3">About Us</h3>
        <p className="description mb-5">
          A Consultant, or Business Adviser, provides expert advice, analysis
          and solutions. We enable new and existing businesses to develop and
          expand. Our duties include developing business plans, advising on
          financial matters and identifying areas for growth within a company.
        </p>
        <h2 className="advisor-title text-center">Our Consultants</h2>
        <section className="content pt-4">
          <div className="advisors-container">
            {/* GRID CARD */}
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {advisors.map((advisor) => (
                <Advisor advisor={advisor} key={advisor.id}></Advisor>
              ))}
            </div>
            {/* GRID CARD */}
          </div>
          <div className="checkout-container">
            <h3>I am from checkout</h3>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Main;
