import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import heading from "./heading.module.css";
import content from "./content.module.css";
import car from "./car.jpg";

const App = () => (
  <>
    <Heading />
    <Content />
  </>
);

const Heading = () => (
  <h1 className={heading.heading}>My React and TypeScript App</h1>
);

const Content = () => (
  <div className={content.container}>
    <img src={car} className={content.car} />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
