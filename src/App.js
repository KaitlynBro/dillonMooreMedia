import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Hero />
      </header>
    </div>
  );
}

export default App;
