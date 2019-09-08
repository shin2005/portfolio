import React from "react";
//import Cover from "./cover.jpg";
//import Cover2 from "./cover2.jpg";
import Cover3 from "./cover3.jpg";
import { css } from "emotion";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import ReactPlayer from "react-player";
import Intro from "./Intro";
import Test from "./test";
import September from "./September";
import { Route, Switch, Link } from "react-router-dom";

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
      <div>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Link to="/September">maybe im cool</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/test" component={Test} />
        <Route path="/becool" component={September} />
      </Switch>
      <Intro />
    </div>
  );
}

export default App;
