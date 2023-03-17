import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import {
  Home,
  About,
} from '@/pages';


/** 路由表 */
export const ROUTES: RouteConfig[] = [
  {
    path: '/Home',
    exact: true,
    component: Home,
  },
  {
    path: '/About',
    component: React.lazy(() => import('@/pages/About')),
  },
  
];
