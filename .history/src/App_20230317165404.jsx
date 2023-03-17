import React from 'react';
import { HashRouter, createBrowserRouter ,RouterProvider} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import zhCN from 'antd/lib/locale/zh_CN';
import { ROUTES } from '@/route';
import { ConfigProvider } from '@/components';

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider>{createBrowserRouter(ROUTES)}</RouterProvider>
    </ConfigProvider>
  );
};

export default App;