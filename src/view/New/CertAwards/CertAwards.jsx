import React from 'react';
import './crtarwards.css';

const CertAwards = () => {
  return (
    <section id="cert-awards" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-4">Chứng nhận & Giải thưởng</h2>
        <div className="row">
          {/* Các chứng nhận */}
          <div className="col-md-6">
            <h4>Các chứng nhận</h4>
            <p>Giấy phép hoạt động, chứng nhận về chất lượng và bảo vệ môi trường.</p>
          </div>
          {/* Giải thưởng */}
          <div className="col-md-6">
            <h4>Giải thưởng</h4>
            <p>Các thành tựu và giải thưởng đã đạt được trong quá trình hoạt động của công ty.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertAwards;
