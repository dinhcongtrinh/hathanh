import React from 'react';
import './sevicessolutions.css';

const ServicesSolutions = () => {
  return (
    <section id="services" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-4">Dịch vụ & Giải pháp</h2>
        <div className="row">
          {/* Các dịch vụ chính */}
          <div className="col-md-6">
            <h4>Các dịch vụ chính</h4>
            <ul>
              <li>Khảo sát trắc địa</li>
              <li>Phân tích môi trường</li>
              <li>Phát triển công nghệ GIS</li>
              <li>Quản lý tài nguyên thiên nhiên</li>
            </ul>
          </div>
          {/* Giải pháp công nghệ */}
          <div className="col-md-6">
            <h4>Giải pháp công nghệ</h4>
            <p>Các sản phẩm, phần mềm và công cụ hỗ trợ doanh nghiệp trong lĩnh vực tài nguyên và môi trường.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSolutions;
