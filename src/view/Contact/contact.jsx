import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <section className="contact-page py-5">
      <div className="container">
        <h2 className="text-center mb-4">Liên hệ</h2>
        <div className="row">
          {/* Phần Google Map hiển thị địa chỉ Tòa The Light */}
          <div className="col-md-6 mb-4">
            <h4>Địa chỉ công ty - Tòa The Light- Tố Hữu</h4>
            <div className="map-responsive">
              <iframe
                title="Company Location - Tòa The Light"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.123456789!2d105.8123456789!3d20.9876543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc12345abcdef:0x9876543210abcdef!2zVHLhuqduIFRo4buZaSBUaOG6oW5n!5e0!3m2!1sen!2s!4v168XXX" 
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* Phần thông tin liên hệ và mạng xã hội */}
          <div className="col-md-6">
            <h4>Thông tin liên hệ</h4>
            <p>
              <strong>Địa chỉ:</strong> Số 95 Đường Trung Văn, Phường Trung Văn, TP Hà Nội
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:vp.hathnh08@gmail.com" className="text-decoration-none">
                vp.hathnh08@gmail.com
              </a>
            </p>
            <p>
              <strong>Điện thoại:</strong>{' '}
              <a href="tel:76543657654" className="text-decoration-none">
                76543657654
              </a>
            </p>
            <h4>Mạng xã hội</h4>
            <ul className="social-links d-flex align-items-center p-0 m-0">
              <li className="me-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
