import React from 'react';
import { LockOutlined, UserOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './footer.css';
import Logo from '../../assets/imgs/HathanhLogo.png';

const Footer = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Login Info:', values);
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h5><HomeOutlined /> Công ty TNHH Phát triển Công nghệ Tài Nguyên và Môi Trường Hà Thành</h5>
          <p>Địa chỉ: Số 95 Đường Trung Văn, Phường Trung Văn, TP Hà Nội</p>
          <p>Email: <a href="mailto:vp.hathanh08@gmail.com">vp.hathanh08@gmail.com</a></p>
          <p>Điện thoại: <a href="tel:76543657654">76543657654</a></p>
        </div>
        <div className="footer-column">
          <h5><InfoCircleOutlined /> Thông tin đăng ký kinh doanh</h5>
          <p>GPKD: 0101632213</p>
          <p>Ngày cấp: 28/03/2005</p>
          <p>Tại Sở Kế hoạch và Đầu tư TP Hà Nội</p>
        </div>
        <div className="footer-column">
          <h5>Đăng nhập tài khoản</h5>
          <Form form={form} name="login_form" onFinish={onFinish} layout="vertical">
            <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}>
              <Input prefix={<UserOutlined />} placeholder="Nhập email của bạn" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Nhập mật khẩu" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Đăng nhập</Button>
            </Form.Item>
            <Form.Item>
              <Button type="link">Chưa có tài khoản? Đăng ký ngay</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="footer-bottom">
        <img src={Logo} alt="Company Logo" className="footer-logo" />
        <small>&copy; 2025 Công ty TNHH Phát triển Công nghệ Tài nguyên và Môi trường Hà Thành. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

