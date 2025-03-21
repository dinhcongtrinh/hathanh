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

  const onFinish = (values) => {
    console.log('Dữ liệu:', values);
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
        >
          {isRegister && (
            <Form.Item name="name" label="Họ và tên" rules={[{ required: true }]}>
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>
          )}

          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
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
            <Button type="primary" htmlType="submit">
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
