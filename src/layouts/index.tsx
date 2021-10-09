import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { IRouteComponentProps } from 'umi';
import UserInfo from './components/UserInfo';
import './index.less';

export default ({ children, location }: IRouteComponentProps) => {
  const state: any = location.state || {};
  return (
    <Layout className="layout">
      <Header className="header">
        <UserInfo avatarUrl={state.avatar} />
      </Header>
      <Content className="content">{children}</Content>
    </Layout>
  );
};
