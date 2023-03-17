import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
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
