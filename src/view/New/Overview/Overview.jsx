import React from 'react';
import './overview.css';

const Overview = () => {
  return (
    <section id="overview" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-4">Giới thiệu chung</h2>
        <div className="row">
          {/* Lịch sử hình thành */}
          <div className="col-md-4">
            <h4>Lịch sử hình thành</h4>
            <p>Quá trình phát triển và các cột mốc quan trọng của công ty.</p>
          </div>
          {/* Sứ mệnh, tầm nhìn và giá trị cốt lõi */}
          <div className="col-md-4">
            <h4>Sứ mệnh & Tầm nhìn</h4>
            <p>Mục tiêu và định hướng phát triển của công ty cùng với giá trị cốt lõi.</p>
          </div>
          {/* Cơ cấu tổ chức */}
          <div className="col-md-4">
            <h4>Cơ cấu tổ chức</h4>
            <p>Thông tin về đội ngũ lãnh đạo và các phòng ban chính của công ty.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
