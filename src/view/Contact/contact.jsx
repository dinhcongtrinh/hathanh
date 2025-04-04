import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import './contact.css';

const validateMessages = {
  required: (label) => `${label} là bắt buộc!`,
  types: {
    email: (label) => `${label} không hợp lệ!`,
    number: (label) => `${label} phải là số!`,
  },
  number: {   
    range: (label, min, max) => `${label} phải nằm trong khoảng ${min} và ${max}`,
  },
};

const ContactForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log('Dữ liệu gửi đi:', values);
    setLoading(true);

    try {
      const url = isRegister ? '/api/signup' : '/api/signin'; // Thay bằng API thực tế
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        alert(isRegister ? 'Đăng ký thành công!' : 'Đăng nhập thành công!');
      } else {
        alert(result.msg || 'Có lỗi xảy ra!');
      }
    } catch (error) {
      console.error(error);
      alert('Lỗi kết nối đến máy chủ!');
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <h2>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</h2>
        <Form 
          name="auth-form"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
          autoComplete="off"
        >
          {isRegister && (
            <Form.Item name="name" label="Họ và tên" rules={[{ required: true }]}>
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>
          )}

          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, min: 6, message: 'Mật khẩu ít nhất 6 ký tự!' }]}>
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          {isRegister && (
            <Form.Item 
              name="confirmPassword" 
              label="Xác nhận mật khẩu"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Mật khẩu không khớp!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Nhập lại mật khẩu" />
            </Form.Item>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              {isRegister ? 'Đăng ký' : 'Đăng nhập'}
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="link" onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? 'Đã có tài khoản? Đăng nhập' : 'Chưa có tài khoản? Đăng ký'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ContactForm;
