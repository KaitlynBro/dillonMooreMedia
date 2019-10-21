import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import Testimonials from './Components/Testimonials.js';
import Timeline from './Components/Timeline.js';
import Footer from './Components/Footer.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="timeline-section">
        <Timeline />
      </section>
      <section className="testimonials-section">
        <Testimonials />
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
