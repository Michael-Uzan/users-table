import { HomePage } from 'views/HomePage';

import { useRoutes } from 'react-router-dom';
import React from 'react';

export const AppRoutes = () => {
  const routes = useRoutes([
    // {
    //   path: '/product/:productId',
    //   element: <ProductView />,
    // },
    {
      path: '/',
      element: <HomePage />,
    },
    // {
    //     path: '/',
    //     component: HomePage,
    // }
  ]);

  return routes;
};
