import { GithubOutlined } from '@ant-design/icons';
import '../index.less';
export interface ILoginButtonProps {
  onClick: () => void;
}

export const GithubButton: React.FC<ILoginButtonProps> = (props) => {
  return <GithubOutlined onClick={props.onClick} className="button-icon" />;
};
