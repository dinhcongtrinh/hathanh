import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const CarouselComponent = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/img/cong-nghe-tainguyen.jpg" className="d-block w-100" alt="Công nghệ tài nguyên"/>
        </div>
        <div className="carousel-item">
          <img src="/img/mekong-vien-tham-viet-nam.jpg" className="d-block w-100" alt="Mekong Viện thám Việt Nam"/>
        </div>
        <div className="carousel-item">
          <img src="/img/moi-truong.jpg" className="d-block w-100" alt="Môi trường"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
