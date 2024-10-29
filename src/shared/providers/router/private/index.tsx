/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from '@/app/layouts/main-layout';
import NotFoundPage from '@/pages/not-found';

const HomePage = lazy(() => import('@/pages/home'));

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
