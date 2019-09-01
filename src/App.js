import React from "react";
//import Cover from "./cover.jpg";
//import Cover2 from "./cover2.jpg";
import Cover3 from "./cover3.jpg";
import { css } from "emotion";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import ReactPlayer from "react-player";
import Intro from "./Intro";

function App() {
  return (
    <div
      className={css`
        background-image: url("${Cover3}");
        background-size: cover;
        overflow: hidden;
        text-align: center;
        a {
          color: #fff;
        }
      `}
    >
      <Intro />
    </div>
  );
}

export default App;
