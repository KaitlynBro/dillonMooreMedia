import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero.js';
import Nav from './Components/Nav.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Hero />
      </header>
    </div>
  );
}

export default App;
