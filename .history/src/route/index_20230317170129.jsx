import React from 'react';
import {
  Home,
  About,
} from '@/pages';


/** 路由表 */
export const ROUTES = [
  {
    path: '/',
    element: <h1 className="home-title">Home~~~</h1>,
  },
  {
    path: '/About',
    element: React.lazy(() => import('@/pages/About')),
  },
  
];
