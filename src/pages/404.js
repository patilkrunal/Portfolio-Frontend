import React from "react";
// import SEO from "../components/SEO";

import notfound from "../images/notfound.svg";
import "../styles/404.css";

export const Page404 = () => (
  <section className="page404">
    <div className="container">
      {/* <div className="row row-404 mt-4 float-right"> */}
      <div className="img-container">
        <img src={notfound} alt="Vector of an alien" />
      </div>
      {/* <div className="row row-404 mt-4 ml-4"> */}
      <div>
        <h1>Uh-oh.</h1>
        <h2>There's nothing here :(</h2>
        <p>For the meantime, choose which alien character you are:</p>
        <br />
        <Slider />
      </div>
    </div>
    {/* </div> */}
    {/* </div> */}
  </section>
);

const Slider = () => {
  const [position, setPosition] = React.useState("1");
  let text = null;
  if (position === "0") {
    text = "👽";
  } else if (position === "1") {
    text = "👾";
  } else if (position === "2") {
    text = "🤖";
  } else if (position === "3") {
    text = "👻";
  }
  return (
    <div>
      <h3>{text}</h3>
      <input
        type="range"
        step="1"
        max="3"
        min="0"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
    </div>
  );
};
