import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection/HeroSection';
import VideoSection from './VideoSection/VideoSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import Testimonials from './Testimonials/Testimonials';
import IndotruceUs from './IndotruceUs/IndotruceUs';
// import Companyintro from './CompanyIntro/CompanyIntro';
import CompanyInfoPage from './VideoSection/pages/CompanyInfoPage';
// import CarouselComponent from './Carousel/CarouselCompnent';

import './home.css';

const Home = () => {
  // State để điều khiển hiển thị dữ liệu công ty
  const [showCompanyInfoPage, setShowCompanyInfoPage] = useState();

  useEffect(() => {
    console.log("Home component is rendering...");
  }, []);

  // Hàm callback được gọi khi nhấn nút "Tìm hiểu thêm"
  const handleShowCompanyInfoPage = () => {
    setShowCompanyInfoPage(true);
  };

  return (
    <div className="home-bg">
      {/* <CarouselComponent/> */}
      {/* Truyền hàm callback xuống VideoSection */}
      <VideoSection onShowCompanyInfoPageCompanyInfo={handleShowCompanyInfoPage} />
      <CompanyInfoPage/>
      {showCompanyInfoPage && <CompanyInfoPage />}
      <ProjectsSection />
      <HeroSection />
      <Testimonials />
      <IndotruceUs/>
     
    </div>
  );
};

export default Home;
