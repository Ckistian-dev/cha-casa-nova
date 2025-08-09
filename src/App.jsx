import React from 'react';
import HeroSection from './sections/HeroSection';
import EventAndLocationSection from './sections/EventAndLocationSection';
import RsvpSection from './sections/RsvpSection';
import GiftsSection from './sections/GiftsSection';

function App() {
  return (
    <React.Fragment>
      <HeroSection />
      <EventAndLocationSection />
      <GiftsSection />
      <RsvpSection />
    </React.Fragment>
  );
}

export default App;
