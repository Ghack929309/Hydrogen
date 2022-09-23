import React from 'react';
import Engagement from '../components/homePage/Engagement.client';
import Header from '../components/homePage/Header.client';
import SecondHeroSection from '../components/homePage/SecondHeroSection.client';

import '../components/homePage/homePage.client.css';

const Home = () => {
  return (
    <>
      <Header />
      <SecondHeroSection />
      <Engagement />
    </>
  );
};
export default Home;
