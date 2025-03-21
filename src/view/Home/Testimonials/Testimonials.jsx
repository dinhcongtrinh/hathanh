import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-4">Khách hàng nói gì</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <blockquote className="blockquote text-center">
                <p className="mb-4"  style={{color:'#666'}}>"Dịch vụ của công ty thực sự xuất sắc, đã giúp chúng tôi cải thiện hiệu quả công việc."</p>
                <footer className="blockquote-footer">
                <span style={{ color: '#03300d' }}>Lê Như Cương</span>
                </footer>

              </blockquote>
            </div>
            <div className="carousel-item">
              <blockquote className="blockquote text-center">
                <p className="mb-4"  style={{color:'#666'}}>"Giải pháp của công ty mang lại sự khác biệt trong kinh doanh, chúng tôi rất hài lòng."</p>
                <footer className="blockquote-footer">
                <span style={{ color: '#03300d' }}>Trần Lê Hải Yến</span>
                </footer>
              </blockquote>
            </div>
            <div className="carousel-item">
              <blockquote className="blockquote text-center">
                <p className="mb-4" style={{color:'#666'}}>"Chất lượng dịch vụ và hỗ trợ khách hàng vượt trội, rất đáng tin cậy."</p>
                <footer className="blockquote-footer">
                  <span style={{ color: '#03300d' }}>Nguyễn Văn Nam</span>
                </footer>
              </blockquote>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
