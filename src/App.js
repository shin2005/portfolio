import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Portfolio</h1>
        <h2>School:</h2>
        <p>I go to ~~~ school I am first grade ~~~</p>
        <h2>Recent awards / achievements:</h2>
        <p>I recently participated in ~~~ </p>
        <p>I recently became a school president in ~~~ </p>
        <p>My soccer team ~~~ </p>
        <h2>Favorite Subject:</h2>
        <p>My favorite subject is</p>
        <h2>What I want to do when I grow up</h2>
        <p>When I grow up ~~~</p>
        <h2>Side projects:</h2>
        <p>when I was 5th grader I ~~</p>
      </header>
    </div>
  );
}

export default App;
