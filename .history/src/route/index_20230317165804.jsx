import React from 'react';
import {
  Home,
  About,
} from '@/pages';


/** 路由表 */
export const ROUTES = [
  {
    path: '/Home',
    exact: true,
    element: Home,
  },
  {
    path: '/About',
    element: React.lazy(() => import('@/pages/About')),
  },
  
];
