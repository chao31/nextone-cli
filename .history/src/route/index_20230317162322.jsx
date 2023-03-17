import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import {
  Home,
  About,
} from '@/pages';

const RedirectToolManager = <Redirect to="/tool-manager" />;
const RedirectNotFound = <Redirect to="/404" />;

/** 路由表 */
export const ROUTES: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    render: () => RedirectToolManager,
  },
  {
    path: '/404',
    component: React.lazy(() => import('@/pages/404')),
  },
  
];
