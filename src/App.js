import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav.js';
import Hero from './Components/Hero.js';
import Social from './Components/Social.js';
import Testimonials from './Components/Testimonials.js';
import Timeline from './Components/Timeline.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Hero />
        <Social />
      </header>
      <section className="timeline-section">
        <Timeline />
      </section>
      <section className="testimonials-section">
        <Testimonials />
      </section>
    </div>
  );
}

export default App;
