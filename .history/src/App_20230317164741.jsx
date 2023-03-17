import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-config';
import zhCN from 'antd/lib/locale/zh_CN';
import { ROUTES } from '@/route';
import { ConfigProvider } from '@/components';

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>{createBrowserRouter(ROUTES)}</HashRouter>
    </ConfigProvider>
  );
};

export default App;