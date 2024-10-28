// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update import here
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUS';
import Sponsor from './components/SponsorForm';
import Event from './components/EventForm';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes> {/* Use Routes instead of Switch */}
     
            <Route path="/" element={<Home />} />{/* Update to use element prop */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/become-a-sponsor" element={<Sponsor />} />
            <Route path="/event-form" element={<Event />} />
            <Route path="/FAQ" element={<FAQ />} />
            {/* Add other routes here as needed */}
            <Route path="*" element={<h2>Page not found!</h2>} /> {/* Fallback route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
