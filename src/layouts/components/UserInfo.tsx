import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
interface Props {
  avatarUrl: string;
}

export default function UserInfo({ avatarUrl }: Props) {
  const avator = avatarUrl ? (
    <Avatar size="small" src={avatarUrl} />
  ) : (
    <Avatar size="small" icon={<UserOutlined />} />
  );
  return <div>{avator}</div>;
}
