import React, { useEffect } from 'react';
import HeroSection from './HeroSection/HeroSection'
import VideoSection from './VideoSection/VideoSection';
import CompanyIntro from './CompanyIntro/CompanyIntro';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import Testimonials from './Testimonials/Testimonials';
import './home.css';

const Home = () => {
  useEffect(() => {
    console.log("Home component is rendering...");
  }, []);
  return (
    <div className="home-bg">
    <VideoSection/>
    <Testimonials />
    <HeroSection />
    <CompanyIntro />
    <ProjectsSection />
   
  </div>
  );
};

export default Home;
