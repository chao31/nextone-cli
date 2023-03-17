import React from 'react';
import {
  Home,
  About,
} from '@/pages';


/** 路由表 */
export const ROUTES = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/About',
    component: React.lazy(() => import('@/pages/About')),
  },
  
];
