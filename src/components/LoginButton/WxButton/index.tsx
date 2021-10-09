import { WechatOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'umi';
import '../index.less';
import QRCode from 'qrcode.react';

const BASE_URL = process.env.BASE_URL;

export const WxLoginButton = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const timer = useRef<any>();
  const history = useHistory();
  const wxButtonClick = () => {
    fetch(`${BASE_URL}/login/wx`).then((res) => {
      res.json().then((data) => {
        setQrCodeUrl(data.data);
        timer.current = setInterval(() => {
          getUserInfo();
        }, 3000);
      });
    });
  };
  const getUserInfo = () => {
    fetch(`${BASE_URL}/getUserInfo/wx`).then((res) => {
      res.json().then((d) => {
        if (d.data) {
          clearInterval(timer.current);
          const { nickname: nickName, avatar } = d.data;
          history.push('/home', { nickName, avatar });
        }
      });
    });
  };
  return (
    <>
      <WechatOutlined onClick={wxButtonClick} className="button-icon" />
      {qrCodeUrl && <QRCode value={qrCodeUrl} />}
    </>
  );
};
