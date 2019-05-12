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
          My favorite subject is science. I like{" "}
          <a
            href="https://en.wikipedia.org/wiki/Quantum_mechanics"
            target="blank"
          >
            quantum mechanics
          </a>
          , although it`s true that it`s very hard.Quantum mechanics is the
          field of science that tries to explain the behavior of particles on
          the sub-atomic level. Quantum mechanics began in the 20c, when
          Heisenberg, Schrödinger, Plank, Einstein, and others, announced
          theories that would contribute to change modern physics forever. It
          led to the creation of the{" "}
          <a href="https://en.wikipedia.org/wiki/Standard_Model" target="blank">
            Standard Model
          </a>
          .
        </p>
        <h3>Useful sites related to coding</h3>
        <p>
          1.
          <a href="https://github.com/" target="blank">
            Github
          </a>
        </p>
        <p>
          2.
          <a href="https://developer.mozilla.org/en-US/" target="blank">
            Mozilla Developer Network(MDN)
          </a>
        </p>
        <h2>What I want to do when I grow up</h2>
        <p>When I grow up I want to be a software developer</p>
        <h2>Side projects:</h2>
        <p>
          On Minecraft, I worked on a massive temple above the world. It was
          made out of every precious metal in the game, and you could make
          lighting strike at the temple. It could be seen from far away, and it
          was a great landmark.
        </p>
      </header>
    </div>
  );
}

export default App;
