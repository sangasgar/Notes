import React, { useEffect, useState } from 'react';
import {
  Input, Button, Form,
} from 'antd';
import axios from 'axios';

function Chat() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState([]);
  const subscribe = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/message');
      console.log(data);
      setMessage((prev) => [...prev, data]);
      console.log(message);
      subscribe();
    } catch (error) {
      setTimeout(() => {
        subscribe();
      }, 500);
    }
  };
  useEffect(() => {
    subscribe();
  }, []);
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  const onFinish = (values) => {
    axios.post('http://localhost:4000/message', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className="page">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                type: 'text',
                required: true,
                message: 'Please input your message!',
              },
            ]}
          >
            <Input value={value} onChange={inputHandler} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

      </div>
      <div className="chatMessage">
        {message.map((el) => el)}
      </div>
    </>
  );
}

export default Chat;
