import React from 'react';
import './herosection.css'; 

const HeroSection = () => {
  return (
    <section className="hero-section position-relative text-white">
      {/* Overlay gradient */}
      <div className="hero-overlay"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col text-center">
            <h1 className="display-6 fw-400">Giải pháp công nghệ tiên tiến</h1>
            <p className="lead">
              Chúng tôi cung cấp các giải pháp GIS, tài nguyên và môi trường hàng đầu cho doanh nghiệp.
            </p>
            <a href="#services" className="btn btn-primary btn-sm">
              Khám phá ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
