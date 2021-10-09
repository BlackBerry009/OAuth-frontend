import { useHistory, useLocation } from 'umi';
import { Avatar } from 'antd';
export default () => {
  const location = useLocation();
  const state: any = location.state;
  return (
    <>
      {'home'}
      name: {state.nickName}
      <Avatar src={state.avatar} />
    </>
  );
};
