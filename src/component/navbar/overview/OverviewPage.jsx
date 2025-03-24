import React from 'react';
import { Link } from 'react-router-dom';
import "./OverviewPage.css"; // Import file CSS riêng

const OverviewPage = () => {
  return (
    <div className="overview-container">
      <h1 className="overview-title">Tổng Quan Môi Trường</h1>

      <div className="overview-content">
        <p>
          🌍 <strong>Thực trạng môi trường toàn cầu:</strong> Hiện nay, môi trường đang đối mặt với nhiều thách thức nghiêm trọng như biến đổi khí hậu, ô nhiễm không khí, nguồn nước và đất. Những tác động này ảnh hưởng lớn đến hệ sinh thái và cuộc sống con người.
        </p>
        <p>
          🏭 <strong>Tác động của con người:</strong> Việc khai thác tài nguyên thiên nhiên quá mức, ô nhiễm môi trường và phá rừng là những nguyên nhân chính dẫn đến sự suy thoái môi trường.
        </p>
        <p>
          💡 <strong>Ý thức bảo vệ môi trường:</strong> Cộng đồng đang dần nâng cao nhận thức về bảo vệ môi trường thông qua các chiến dịch xanh, tái chế rác thải, tiết kiệm tài nguyên và sử dụng năng lượng tái tạo.
        </p>
        <p>
          🌱 <strong>Chúng ta cần làm gì?</strong> Giảm thiểu rác thải nhựa, trồng cây xanh, sử dụng phương tiện công cộng và tham gia các hoạt động bảo vệ môi trường là những hành động thiết thực để bảo vệ trái đất.
        </p>
      </div>

      {/* Thanh menu con */}
      <nav className="overview-menu">
        <ul>
          <li><Link to="/home/overview/general">Thực trạng môi trường</Link></li>
          <li><Link to="/home/overview/solutions">Giải pháp bảo vệ</Link></li>
          <li><Link to="/home/overview/impact">Tác động của con người</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default OverviewPage;
