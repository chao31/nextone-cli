import React from 'react';
import {  createBrowserRouter ,RouterProvider} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import zhCN from 'antd/lib/locale/zh_CN';
import { ROUTES } from '@/route';
import { ConfigProvider } from '@/components';

const router = createBrowserRouter(ROUTES); 
const App = () => {
  return (
    // <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    {/* </ConfigProvider> */}
  );
};

export default App;