import React from 'react';
import {
  Button, Form, Input, Typography,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { regUser } from '../../Redux/Actions/userActions';

function Register() {
  const dispatch = useDispatch();
  const { Text } = Typography;
  const onFinish = (values) => {
    dispatch(regUser(values));
    console.log('Success:', values);
  };

  // const { name } = useSelector((state) => state);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const { user } = useSelector((state) => state);
  return (
    <div className="page">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>Регистрация</h1>
        {user.error ? <Text type="danger">Такой пользователь уже существует пожалуйста войдите в систему</Text> : null}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
