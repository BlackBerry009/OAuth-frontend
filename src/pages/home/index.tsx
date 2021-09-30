import { useHistory, useLocation } from 'umi';
import { Avatar } from 'antd';
export default () => {
  const location = useLocation();
  console.log('object', location.state);
  const state: any = location.state;
  return (
    <>
      {'home'}
      name: {state.login}
      <Avatar src={state.avatar_url} />
    </>
  );
};
