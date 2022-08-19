import React from 'react';
import {
  Input, Button,
} from 'antd';

function Chat() {
  return (
    <div className="info-chat">
      <Input.Group compact>
        <Input
          style={{
            width: 'calc(90% - 100px)',
          }}
          defaultValue=""
        />
        <Button type="primary">Submit</Button>
      </Input.Group>
    </div>
  );
}

export default Chat;
