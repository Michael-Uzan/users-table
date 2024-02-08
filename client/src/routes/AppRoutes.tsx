import { HomePage } from 'views/HomePage';

import { useRoutes } from 'react-router-dom';
import React from 'react';
import { UserEditor } from 'views/UserEditor';

export const AppRoutes = () => {
  const routes = useRoutes([
    // {
    //   path: '/product/:productId',
    //   element: <ProductView />,
    // },
    {
      path: '/',
      element: <HomePage />,
      children: [{ path: '/:userId', element: <UserEditor /> }],
    },
    // {
    //     path: '/',
    //     component: HomePage,
    // }
  ]);

  return routes;
};