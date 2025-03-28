import React from "react";

const AboutCompany = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
        GIỚI THIỆU CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ VÀ TÀI NGUYÊN MÔI TRƯỜNG HÀ THÀNH
      </h1>

      {/* Thông tin doanh nghiệp */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">1. Thông tin doanh nghiệp</h2>
        <p className="text-gray-700 mt-2"><strong>Tên đầy đủ:</strong> Công ty TNHH Phát triển Công nghệ và Tài nguyên Môi trường Hà Thành</p>
        <p className="text-gray-700"><strong>Tên tiếng Anh:</strong> Ha Thanh Technology Development and Natural Resources - Environment Co. LTD</p>
        <p className="text-gray-700"><strong>Trụ sở chính:</strong> Số 95, đường Trung Văn, Phường Trung Văn, Quận Nam Từ Liêm, Hà Nội</p>
      </section>

      {/* Giấy phép kinh doanh */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">2. Giấy phép đăng ký kinh doanh</h2>
        <p className="text-gray-700"><strong>Số:</strong> 0101632213</p>
        <p className="text-gray-700"><strong>Ngày cấp:</strong> 28/3/2005</p>
        <p className="text-gray-700"><strong>Nơi cấp:</strong> Sở Kế hoạch và Đầu tư, Thành phố Hà Nội</p>
      </section>

      {/* Giấy phép hoạt động đo đạc và bản đồ */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">3. Giấy phép hoạt động đo đạc và bản đồ</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Số:</strong> 226 (Cấp lần thứ nhất: 31/8/2005)</li>
          <li><strong>Số:</strong> 1262 (Cấp lần thứ 11: 25/5/2021)</li>
          <li><strong>Số:</strong> 00059 (Cấp lần thứ ba: 09/8/2019)</li>
          <li><strong>Nơi cấp:</strong> Cục Đo đạc Bản đồ và Thông tin địa lý - Bộ Tài nguyên và Môi trường</li>
        </ul>
      </section>

      {/* Vốn điều lệ */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">4. Vốn điều lệ</h2>
        <p className="text-gray-700"><strong>45.000.000.000 đồng</strong></p>
      </section>

      {/* Thông tin liên hệ */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">5. Thông tin liên hệ</h2>
        <p className="text-gray-700"><strong>Điện thoại/Fax:</strong> 024 666 428 39</p>
        <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:vp.hathanh08@gmail.com" className="text-blue-600 hover:underline">vp.hathanh08@gmail.com</a></p>
      </section>

      {/* Kết thúc */}
      <div className="text-center text-green-600 font-bold text-lg mt-4">
        Công nghệ tiên tiến - Phát triển bền vững! 🌱🌍
      </div>
    </div>
  );
};

export default AboutCompany;
