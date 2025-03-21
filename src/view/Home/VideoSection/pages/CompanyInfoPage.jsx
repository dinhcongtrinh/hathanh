

import React from "react";
import "./companyinfo.css";

const CompanyInfoPage = () => {
  // Dữ liệu cố định trong frontend
  const companyData = {
    name: "Công ty TNHH Phát triển Công nghệ Tài Nguyên và Môi Trường Hà Thành",
    description:
      "Công ty TNHH Phát triển Công nghệ Tài Nguyên và Môi Trường Hà Thành chuyên cung cấp giải pháp phần mềm và tư vấn công nghệ.",
    mission: [
      "Cung cấp giải pháp sáng tạo và hiệu quả",
      "Hỗ trợ khách hàng phát triển bền vững",
      "Xây dựng đội ngũ nhân sự chất lượng cao",
    ],
    fields: [
      "Phát triển phần mềm",
      "Tư vấn công nghệ",
      "Chuyển đổi số",
      "Dịch vụ đám mây",
    ],
  };

  return (
    <div className="company-info-container">
      <h2>{companyData.name}</h2>
      <p>{companyData.description}</p>

      <h3>Sứ mệnh và giá trị cốt lõi</h3>
      <ul>
        {companyData.mission.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Lĩnh vực hoạt động</h3>
      <ul>
        {companyData.fields.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyInfoPage;
