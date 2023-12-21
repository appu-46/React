import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      color={"gold"}
      size={48}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
      maxRating={5}
    />
    <StarRating
      color={"red"}
      size={64}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
      maxRating={5}
    />
  </React.StrictMode>
);
