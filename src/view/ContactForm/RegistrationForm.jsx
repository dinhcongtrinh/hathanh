import React from 'react';
import { Form, Input, Select, Checkbox, Button, DatePicker, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './registrationform.css';

const { Option } = Select;

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Data Submitted:', values);
    alert('Đăng ký thành công!');
  };

  return (
    <div className="registration-form text-white">
      <h2>Đăng ký tài khoản</h2>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="fullName" label="Họ và tên" rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}> 
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}> 
          <Input />
        </Form.Item>

        <Form.Item name="phoneNumber" label="Số điện thoại" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}> 
          <Input />
        </Form.Item>

        <Form.Item name="username" label="Tên đăng nhập" rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}> 
          <Input />
        </Form.Item>

        <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}> 
          <Input.Password />
        </Form.Item>

        <Form.Item name="confirmPassword" label="Xác nhận mật khẩu" dependencies={['password']} rules={[{ required: true, message: 'Vui lòng xác nhận mật khẩu!' }, ({ getFieldValue }) => ({ validator(_, value) { return !value || getFieldValue('password') === value ? Promise.resolve() : Promise.reject(new Error('Mật khẩu không khớp!')); }, }),]}> 
          <Input.Password />
        </Form.Item>

        <Form.Item name="birthDate" label="Ngày sinh"> 
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="gender" label="Giới tính"> 
          <Select placeholder="Chọn giới tính">
            <Option value="male">Nam</Option>
            <Option value="female">Nữ</Option>
            <Option value="other">Khác</Option>
          </Select>
        </Form.Item>

        <Form.Item name="address" label="Địa chỉ"> 
          <Input />
        </Form.Item>

        <Form.Item name="avatar" label="Ảnh đại diện"> 
          <Upload beforeUpload={() => false} listType="picture">
            <Button icon={<UploadOutlined />}>Tải lên</Button>
          </Upload>
        </Form.Item>

        <Form.Item name="termsAccepted" valuePropName="checked" rules={[{ validator:(_, value) => value ? Promise.resolve() : Promise.reject(new Error('Bạn cần đồng ý với điều khoản sử dụng!')) }]}> 
          <Checkbox>Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật.</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Đăng ký</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
