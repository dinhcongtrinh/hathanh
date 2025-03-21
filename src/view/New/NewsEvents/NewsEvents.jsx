import React from 'react';
import './newsevents.css';

const NewsEvents = () => {
  return (
    <section id="news-events" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-4">Tin tức & Sự kiện</h2>
        <div className="row">
          {/* Thông tin cập nhật */}
          <div className="col-md-6">
            <h4>Thông tin cập nhật</h4>
            <p>Tin tức, bài viết chuyên sâu, sự kiện và hội thảo liên quan đến ngành công nghệ, tài nguyên và môi trường.</p>
          </div>
          {/* Thông báo */}
          <div className="col-md-6">
            <h4>Thông báo</h4>
            <p>Các chương trình đào tạo, chiến dịch và hoạt động xã hội của công ty.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
