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
  {
    path: '/:menu',
    component: ToolManagerHome,
    routes: [
      {
        path: '/tool-manager',
        component: ToolManager,
      },
      {
        path: '/tool-detail/:detail',
        component: ToolDetail,
        routes: [
          {
            path: '/tool-detail/user-and-auth',
            component: UserAndAuth,
          },
          {
            path: '/tool-detail/open-api',
            component: OpenApi,
          },
          {
            path: '/tool-detail/operator-record',
            component: OperatorRecord,
          },
          {
            path: '/tool-detail/plugin-manager',
            component: PluginManager,
          },
          {
            path: '/tool-detail/git-url',
            component: GitRepositoryUrl,
          },
          {
            path: '*',
            component: WaitingPage,
          },
        ],
      },
      {
        path: '/plugin-detail',
        component: PluginDetail,
        exact: true,
      },
      {
        path: '/approve-manager',
        component: ApproveManager,
        exact: true,
      },
      {
        path: '/super-admin',
        component: WaitingPage,
        exact: true,
      },
      {
        path: '/plateform-config',
        component: WaitingPage,
        exact: true,
      },
      {
        path: '*',
        render: () => RedirectNotFound,
      },
    ],
  },
];
