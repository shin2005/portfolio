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
        <p>
          My favorite subject is science. I like quantum mechanics, although
          it`s true that it`s very hard.Quantum mechanics is the field of
          science that tries to explain the behavior of particles on the
          sub-atomic level. Quantum mechanics began in the 20c, when Heisenberg,
          Schrödinger, Plank, Einstein, and others, announced theories that
          would contribute to change modern physics forever. It led to the
          creation of the{" "}
          <a href="https://en.wikipedia.org/wiki/Standard_Model" target="blank">
            Standard Model
          </a>
          .
        </p>
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
