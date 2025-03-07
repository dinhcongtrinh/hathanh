import React from 'react';
import './indotruceus.css';

const IndotruceUs = () => {
  return (
    <section id="about" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-4">Giới thiệu về chúng tôi</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            {/* Ví dụ sử dụng Bootstrap Icons, cần tải thư viện bootstrap-icons */}
            <i className="bi bi-building" style={{ fontSize: '3rem', color: '#006400' }}></i>
            <h4 className="mt-3" style={{ color:'#006400'}}>Công nghệ</h4>
            <p>Cung cấp giải pháp công nghệ tiên tiến, tối ưu hiệu suất và năng suất.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-globe" style={{ fontSize: '3rem', color: '#006400' }}></i>
            <h4 className="mt-3" style={{ color:'#006400'}}>Tài nguyên</h4>
            <p>Quản lý và khai thác tài nguyên một cách hiệu quả, bền vững.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-tree" style={{ fontSize: '3rem', color: '#006400' }}></i>
            <h4 className="mt-3" style={{ color:'#006400'}}>Môi trường</h4>
            <p>Bảo vệ môi trường và thúc đẩy phát triển xanh, bền vững.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndotruceUs;
