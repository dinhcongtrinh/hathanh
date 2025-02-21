import React from 'react';
import HeroSection from './HeroSection/HeroSection'
import VideoSection from './VideoSection/VideoSection';
import CompanyIntro from './CompanyIntro/CompanyIntro';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import Testimonials from './Testimonials/Testimonials';
import './home.css';

const Home = () => {
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
