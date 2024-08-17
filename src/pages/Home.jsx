import React from 'react';
import Contact from '../Components/Contact';
import Navigation from '../Components/Navigation';
import Services from '../Components/Services';
import ServiceBoxes from '../Components/ServicesBoxes';
import HeroHome from '../components/HeroHome';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Navigation />

      <main className="flex-grow">

        <HeroHome />
        <Services />
        <ServiceBoxes />
        <Contact />

      </main>

    </div>
  );
}

export default Home;