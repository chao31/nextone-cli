import React from 'react';
import {
  Home,
} from '@/pages';

const About = React.lazy(() => import('@/pages/About'));

/** 路由表 */
export const ROUTES = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    component: <About />,
  },
  
];
