import { WechatOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useHistory } from 'umi';
import '../index.less';
import QRCode from 'qrcode.react';

const BASE_URL = process.env.BASE_URL;

export const WxLoginButton = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const history = useHistory();
  const wxButtonClick = () => {
    fetch(`${BASE_URL}/login/wx`).then((res) => {
      res.json().then((data) => {
        setQrCodeUrl(data.data);
        setInterval(() => {
          fetch(`${BASE_URL}/login/wx`);
        }, 3000);
      });
    });
  };
  useEffect(() => {
    fetch(`${BASE_URL}/getUserInfo/wx`).then((res) => {
      res.json().then((d) => {
        if (d.data) {
          history.push('/home', d.data);
        }
      });
    });
  });
  return (
    <>
      <WechatOutlined onClick={wxButtonClick} className="button-icon" />
      {qrCodeUrl && <QRCode value={qrCodeUrl} />}
    </>
  );
};
