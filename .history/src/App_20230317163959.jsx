import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import zhCN from 'antd/lib/locale/zh_CN';
import { ROUTES } from '@/route';
import { ConfigProvider } from '@/components';

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>{renderRoutes(ROUTES)}</HashRouter>
    </ConfigProvider>
  );
};

export default App;