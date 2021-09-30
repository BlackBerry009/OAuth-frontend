import { GithubButton } from '@/components/LoginButton/GithubButton';
import { useEffect } from 'react';
import { IRouteComponentProps, useHistory } from 'umi';

export default (props: IRouteComponentProps) => {
  const githubButtonClick = () => {
    fetch('http://localhost:3000/login/github').then((res) => {
      res.json().then((data) => {
        window.location.href = data.data;
      });
    });
  };
  const history = useHistory();
  useEffect(() => {
    const code = props.location.query.code;
    fetch(`http://localhost:3000/getUserInfo/github?code=${code}`).then(
      (res) => {
        res.json().then((d) => {
          if (d.data) {
            history.push('/home', d.data);
          }
        });
      },
    );
  });
  return (
    <>
      <GithubButton onClick={githubButtonClick} />
    </>
  );
};
