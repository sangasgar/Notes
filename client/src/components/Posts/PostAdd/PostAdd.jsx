/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Button, Form, Input, Typography,
} from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../../Redux/Actions/postAction';

function PostAdd() {
  const { user } = useSelector((state) => state);
  const { Text } = Typography;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(createPost({ ...values, userId: user.id }));
  };
  const { post } = useSelector((state) => state);
  return (
    <div className="info">
      <h1>Добавить запись</h1>
      {post.errorName ? <Text type="danger">Такой пост уже существует</Text> : null}
      {post.name ? <Text type="success">Пост добавлен</Text> : null}
      <Form
        form={form}
        layout="vertical"
        name="addPosts"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Название записи"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Описание записи"
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
            Add post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PostAdd;
