import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
interface Props {
  avatorUrl: string;
}

export default function UserInfo({ avatorUrl }: Props) {
  const avator = avatorUrl ? (
    <Avatar size="small" src={avatorUrl} />
  ) : (
    <Avatar size="small" icon={<UserOutlined />} />
  );
  return <div>{avator}</div>;
}
