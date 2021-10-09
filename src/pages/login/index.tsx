import { GithubLoginButton } from '@/components/LoginButton/GithubButton';
import { WxLoginButton } from '@/components/LoginButton/WxButton';
import { useEffect } from 'react';

const BASE_URL = process.env.BASE_URL;

export default () => {
  return (
    <>
      <GithubLoginButton />
      <WxLoginButton />
    </>
  );
};
