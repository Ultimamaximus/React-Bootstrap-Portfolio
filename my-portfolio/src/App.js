import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar'; // Assuming your components are in a folder named 'components'
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

export default App;

