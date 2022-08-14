import React, { useState } from 'react';
import {
  Button, Form, Input, Typography,
} from 'antd';
import axios from 'axios';
import { SERVICE_2 } from '../../server/server';

function SendMessage() {
  const [form] = Form.useForm();
  const [value, setValue] = useState();
  const { Text } = Typography;
  const onFinish = (values) => {
    console.log(values);
    axios.post(`${SERVICE_2}/posts/sender`, values).then((res) => setValue(res.data)).catch((res) => console.log(res.data));
  };
  return (
    <div className="info">
      <Form
        form={form}
        layout="vertical"
        name="addPosts"
        onFinish={onFinish}
        scrollToFirstError
      >
        <h1>Отправить сообщение на почту</h1>
        {value ? <Text type="success">Сообщение успешно отправлено</Text> : null}
        <Form.Item
          name="email"
          label="Кому отправить"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="subject"
          label="Тема"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="body"
          label="Текс сообщения"
          rules={[
            {
              required: true,
              message: 'Please input description',
            },
          ]}
        >
          <Input.TextArea
            style={{
              width: 500,
            }}
            showCount
            maxLength={500}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить сообщение
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SendMessage;
