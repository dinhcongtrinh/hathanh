import React from 'react';

const History= () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Quá trình phát triển & Các cột mốc quan trọng</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-year">2000</div>
          <div className="timeline-content">
            <h4>Thành lập công ty</h4>
            <p>Được thành lập với sứ mệnh nghiên cứu và phát triển công nghệ tài nguyên & môi trường.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2005</div>
          <div className="timeline-content">
            <h4>Ra mắt sản phẩm đầu tiên</h4>
            <p>Giới thiệu phần mềm GIS hỗ trợ quản lý tài nguyên thiên nhiên.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2010</div>
          <div className="timeline-content">
            <h4>Mở rộng thị trường quốc tế</h4>
            <p>Thiết lập chi nhánh tại các nước Đông Nam Á, mở rộng phạm vi hoạt động.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2015</div>
          <div className="timeline-content">
            <h4>1 triệu khách hàng</h4>
            <p>Đạt mốc 1 triệu người dùng tin tưởng và sử dụng sản phẩm của công ty.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2020</div>
          <div className="timeline-content">
            <h4>Ứng dụng trí tuệ nhân tạo</h4>
            <p>Triển khai công nghệ AI vào các hệ thống phân tích môi trường.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2023</div>
          <div className="timeline-content">
            <h4>Vươn lên top công ty công nghệ hàng đầu</h4>
            <p>Trở thành một trong những doanh nghiệp hàng đầu trong lĩnh vực công nghệ tài nguyên & môi trường.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
