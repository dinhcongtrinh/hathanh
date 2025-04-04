import React from "react";

const AboutCompany = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="text-center text-success fw-bold mb-4">
            GIỚI THIỆU CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ VÀ TÀI NGUYÊN MÔI TRƯỜNG HÀ THÀNH
          </h1>

          <section className="mb-4">
            <h2 className="h5 fw-semibold">1. Thông tin doanh nghiệp</h2>
            <p><strong>Tên đầy đủ:</strong> Công ty TNHH Phát triển Công nghệ và Tài nguyên Môi trường Hà Thành</p>
            <p><strong>Tên tiếng Anh:</strong> Ha Thanh Technology Development and Natural Resources - Environment Co. LTD</p>
            <p><strong>Trụ sở chính:</strong> Số 95, đường Trung Văn, Phường Trung Văn, Quận Nam Từ Liêm, Hà Nội</p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-semibold">2. Giấy phép đăng ký kinh doanh</h2>
            <p><strong>Số:</strong> 0101632213</p>
            <p><strong>Ngày cấp:</strong> 28/3/2005</p>
            <p><strong>Nơi cấp:</strong> Sở Kế hoạch và Đầu tư, Thành phố Hà Nội</p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-semibold">3. Giấy phép hoạt động đo đạc và bản đồ</h2>
            <ul className="list-group">
              <li className="list-group-item"><strong>Số:</strong> 226 (Cấp lần thứ nhất: 31/8/2005)</li>
              <li className="list-group-item"><strong>Số:</strong> 1262 (Cấp lần thứ 11: 25/5/2021)</li>
              <li className="list-group-item"><strong>Số:</strong> 00059 (Cấp lần thứ ba: 09/8/2019)</li>
              <li className="list-group-item"><strong>Nơi cấp:</strong> Cục Đo đạc Bản đồ và Thông tin địa lý - Bộ Tài nguyên và Môi trường</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-semibold">4. Vốn điều lệ</h2>
            <p><strong>45.000.000.000 đồng</strong></p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-semibold">5. Thông tin liên hệ</h2>
            <p><strong>Điện thoại/Fax:</strong> 024 666 428 39</p>
            <p><strong>Email:</strong> <a href="mailto:vp.hathanh08@gmail.com" className="text-primary">vp.hathanh08@gmail.com</a></p>
          </section>

          <div className="text-center text-success fw-bold mt-3">
            Công nghệ tiên tiến - Phát triển bền vững! 🌱🌍
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
