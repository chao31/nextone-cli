import React from 'react';
import {
  Home,
  About,
} from '@/pages';

cosnt About = React.lazy(() => import('@/pages/About'));

/** 路由表 */
export const ROUTES = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/About',
    component: ,
  },
  
];
