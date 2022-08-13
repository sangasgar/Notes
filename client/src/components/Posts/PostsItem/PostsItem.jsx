import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function PostsItem({
  name, description,
}) {
  return (
    <>
      <Title level={3}>
        { name }
      </Title>
      {' '}
      <Paragraph strong copyable>{description}</Paragraph>
    </>
  );
}

export default PostsItem;
