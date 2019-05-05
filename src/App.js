import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Portfolio</h1>
        <h2>School: </h2>
        <p>I go to Yeoksam Middle School I am second grade </p>
        <h3>Recent awards / achievements: Award in science writing contest</h3>
        <p>I recently participated in a science contest </p>
        <p>I recently became a class president in 2018 </p>
        <h2>Favorite Subject:</h2>
        <p>My favorite subject is science. </p>
        <h2>What I want to do when I grow up</h2>
        <p>When I grow up I want to be a software developer</p>
        <h2>Side projects:</h2>
        <p>
          when I was a 6th grader, I was the best kid in my class. I was the
          smartest and always got very high scores on the exams.{" "}
        </p>
      </header>
    </div>
  );
}

export default App;
