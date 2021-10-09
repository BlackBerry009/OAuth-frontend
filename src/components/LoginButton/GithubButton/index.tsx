import { GithubOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'umi';
import '../index.less';

const BASE_URL = process.env.BASE_URL;
type NLocation = ReturnType<typeof useLocation> & {
  query?: {
    code: string;
  };
};
export const GithubLoginButton = () => {
  const history = useHistory();
  const location = useLocation() as NLocation;
  const githubButtonClick = () => {
    fetch(`${BASE_URL}/login/github`).then((res) => {
      res.json().then((data) => {
        window.location.href = data.data;
      });
    });
  };
  useEffect(() => {
    const code = location?.query?.code;
    code &&
      fetch(`${BASE_URL}/getUserInfo/github?code=${code}`).then((res) => {
        res.json().then((d) => {
          if (d.data) {
            const { login: nickName, avatar_url: avatar } = d.data;
            history.push('/home', { nickName, avatar });
          }
        });
      });
  }, [location?.query?.code]);
  return <GithubOutlined onClick={githubButtonClick} className="button-icon" />;
};
